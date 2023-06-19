import Order from "../models/order.js";
import Database from "../config/database.js";

export const createOrder = async (req, res) => {
  try {
    const { value } = req.params;
    const database = new Database();
    await database.connect();
    const { body } = req;
    /* console.log("order", { user_id: value, ...body }); */
    const item = new Order({ user_id: value, ...body });
    await item.save();
    res.status(201).json(item);
    await database.disconnect();
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getAllOrder = async (req, res) => {
  try {
    const database = new Database();
    await database.connect();
    const orders = await Order.find()
      .populate({
        path: "user_id",
        select: "name",
      })
      .populate({
        path: "order",
        populate: [{ path: "id", select: "title" }],
      })
      .exec();
    await database.disconnect();
    if (orders.length) return res.status(200).json(orders);
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getOneOrder = async (req, res) => {
  try {
    res.json(req.body.orders[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};
