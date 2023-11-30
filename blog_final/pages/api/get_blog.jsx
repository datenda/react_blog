import { connectMongoDB } from "../libs/mongoConnect";
import Blog from "../models/blogModel";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET" });
    return;
  }

  try {
    await connectMongoDB();
    const blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch (error) {
    console.log(error);
  }
}
