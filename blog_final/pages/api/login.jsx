import { connectMongoDB } from "../libs/mongoConnect";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only POST requests are allowed" });
    return;
  }

  const login = req.body;

  if (!login.username || !login.password) {
    res.status(400).send({ msg: "Both username and password are required" });
    return;
  }

  try {
    const mongoClient = await connectMongoDB();

    const user = await mongoClient
      .collection("users")
      .findOne({ username: login.username, password: login.password });

    if (user) {
      // Generate a token
      const token = jwt.sign({ userId: user._id }, "your-secret-key", {
        expiresIn: "30d", // Token expiration time
      });
      console.log(token);
      res.status(201).json({ token });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
}
