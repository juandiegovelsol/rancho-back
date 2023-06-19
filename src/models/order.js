import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
    require: true,
    default: Date.now(),
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Menu",
  },
  total: {
    type: Number,
    require: true,
  },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
