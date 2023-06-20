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

export const getAllOrders = async (req, res) => {
  try {
    res.status(200).json(req.body.orders);
  } catch (error) {
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

export const getUserOrders = async (req, res) => {
  try {
    const { orders } = req.body;
    const user = req.body.items[0];
    let userOrders = [];
    orders.map((order) => {
      if (order.user_id._id.equals(user._id)) {
        userOrders.push(order);
      }
    });
    res.status(200).json(userOrders);
  } catch (error) {}
};

export const updateOrder = async (req, res) => {
  try {
    const database = new Database();
    await database.connect();
    let order = req.body.orders[0];
    order = Object.assign(order, req.body);
    const updatedOrder = await order.save();
    await database.disconnect();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};
