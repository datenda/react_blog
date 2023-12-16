import { ObjectId } from "mongodb";
import { connectMongoDB } from "../libs/mongoConnect";
import ForumPost from "../models/forumModel";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    res.status(405).send({ msg: "Only PUT" });
    return;
  }

  const { user, content, _id } = req.body;
  const filter = { _id: new ObjectId(_id) };

  const postData = {
    $push: {
      replies: {
        user: user,
        content: content,
        date: new Date(),
      },
    },
  };

  try {
    await connectMongoDB();
    const data = await ForumPost.updateOne(filter, postData);
    res.status(200).send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
}
