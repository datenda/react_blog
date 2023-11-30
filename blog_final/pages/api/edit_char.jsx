import { connectMongoDB } from "../libs/mongoConnect";
import Char from "../models/charModel";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    res.status(405).send({ msg: "Only POST" });
    return;
  }
  const { name, stats, description, image } = req.body;

  const postData = {
    $set: {
      name: name,
      stats: stats,
      description: description,
      image: image,
    },
  };

  const filter = { name: name };

  console.log("BLOG: " + postData);
  try {
    await connectMongoDB();
    const data = await Char.updateOne(filter, postData);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
}
