import { connectMongoDB } from "../libs/mongoConnect";
import Char from "../models/charModel";
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET" });
    return;
  }

  try {
    await connectMongoDB();
    const chars = await Char.find();
    res.status(200).send(chars);
  } catch (error) {
    console.log(error);
  }
}
