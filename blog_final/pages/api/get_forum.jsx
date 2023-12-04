import { connectMongoDB } from "../libs/mongoConnect";
import ForumPost from "../models/forumModel";
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET" });
    return;
  }

  try {
    await connectMongoDB();
    const forums = await ForumPost.find();
    res.status(200).send(forums);
  } catch (error) {
    console.log(error);
  }
}
