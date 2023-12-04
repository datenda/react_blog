import { Schema, model, models } from "mongoose";

const forumPostSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: { type: String, required: true },
  date: {
    type: Date, // Set the type to Date
    default: Date.now, // Provide a default value (current timestamp)
  },
  tags: {
    type: String,
    required: true,
  },
});
const ForumPost = models.ForumPost || model("ForumPost", forumPostSchema);

export default ForumPost;
