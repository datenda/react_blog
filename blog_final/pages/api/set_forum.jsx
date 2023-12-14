import { connectMongoDB } from "../libs/mongoConnect";
import ForumPost from "../models/forumModel";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only POST" });
    return;
  }
  const { user, title, tags, content } = req.body;

  const postData = {
    user,
    title,
    tags,
    content,
  };

  try {
    await connectMongoDB();
    const data = await ForumPost.create(postData);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
}
