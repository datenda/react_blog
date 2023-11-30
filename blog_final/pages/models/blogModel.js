import { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: [
    {
      sectionTitle: {
        type: String,
        required: true,
      },
      sectionText: {
        type: String,
        required: true,
      },
    },
  ],
  file: { type: String },
});
const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
