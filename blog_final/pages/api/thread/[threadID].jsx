import { ObjectId } from "mongodb";
import { connectMongoDB } from "../../libs/mongoConnect";
import ForumPost from "../../models/forumModel";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET" });
    return;
  }

  const threadId = req.query;

  if (!threadId) {
    res.status(400).send({ msg: "Thread ID is required" });
    return;
  }

  try {
    const mongoClient = await connectMongoDB();

    const forum = await mongoClient
      .collection("forumposts")
      .findOne({ _id: threadId.threadID });

    if (forum) {
      res.status(200).json(forum);
    } else {
      res.status(404).json({ msg: "Thread not found" });
    }
  } catch (error) {
    console.error("Error fetching thread:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
}