import { Schema, model, models } from "mongoose";

const replySchema = new Schema({
  user: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

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
    type: [String],
    required: true,
  },
  replies: [replySchema],
});

const ForumPost = models.ForumPost || model("ForumPost", forumPostSchema);

export default ForumPost;
