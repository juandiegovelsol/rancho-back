import mongoose, { Schema } from "mongoose";

const OrderSubSchema = new Schema({
  id: { type: Schema.Types.ObjectId, ref: "Menu", require: true },
  quantity: {
    type: Number,
    require: true,
    default: 1,
  },
});

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
  order: [OrderSubSchema],
  total: {
    type: Number,
    require: true,
  },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
