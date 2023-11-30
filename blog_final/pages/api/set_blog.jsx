import { connectMongoDB } from "../libs/mongoConnect";
import Blog from "../models/blogModel";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only POST" });
    return;
  }
  console.log("req body:", JSON.stringify(req.body, null, 2));

  const { author, title, content, file } = req.body;

  const postData = {
    author,
    title,
    content,
    file,
  };

  console.log("BLOG: " + postData);
  try {
    await connectMongoDB();
    const data = await Blog.create(postData);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
}
