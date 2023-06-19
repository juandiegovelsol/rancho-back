import Database from "../config/database.js";
import Order from "../models/order.js";

export const findOrder = async (req, res, next) => {
  try {
    const database = new Database();
    await database.connect();
    const { key, value } = req.params;
    let query = {};
    query[key] = value;
    const orders = await Order.find(query)
      .populate({
        path: "user",
        select: "email",
      })
      .exec();
    await database.disconnect();
    if (!orders.length) return res.status(204).send();
    req.body.orders = orders;
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};
