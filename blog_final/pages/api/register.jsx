import { connectMongoDB } from "../libs/mongoConnect";
import User from "../models/userModel";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only POST" });
    return;
  }

  const { username, email, password } = req.body;

  const postData = {
    username,
    email,
    password,
  };

  console.log("BLOG: " + JSON.stringify(postData));
  try {
    await connectMongoDB();
    const data = await User.create(postData);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
}
