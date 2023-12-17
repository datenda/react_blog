import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  stats: [
    {
      hp: { type: Number, required: true },
      defense: { type: Number, required: true },
      attack: { type: Number, required: true },
    },
  ],
});
const Item = models.Item || model("Item", itemSchema);

export default Item;
