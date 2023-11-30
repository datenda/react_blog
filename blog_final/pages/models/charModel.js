import { Schema, model, models } from "mongoose";

const charSchema = new Schema({
  name: { type: String, required: true },
  stats: [
    {
      hp: { type: Number, required: true },
      defense: { type: Number, required: true },
      attack: { type: Number, required: true },
    },
  ],
  description: { type: String, required: true },
  image: { type: String },
});
const Char = models.Char || model("Char", charSchema);

export default Char;
