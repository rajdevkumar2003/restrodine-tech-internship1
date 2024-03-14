import { Schema, model, models } from "mongoose";

const ItemSchema = new Schema(
  {
    category: { type: String, required: true },
    itemName: { type: String, required: true, unique: true},
    eta: { type: Number, required: true}
  },
  {
    timestamps: true,
  }
);

const Item = models.Item || new model( "Item",ItemSchema);

export default Item;