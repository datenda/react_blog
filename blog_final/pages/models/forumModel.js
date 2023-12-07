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
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String], // Array of strings
    required: true,
  },
});

const ForumPost = models.ForumPost || model("ForumPost", forumPostSchema);

export default ForumPost;
