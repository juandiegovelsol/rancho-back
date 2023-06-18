import Menu from "../models/menu.js";
import Database from "../config/database.js";

export const createDish = async (req, res) => {
  try {
    const database = new Database();
    await database.connect();
    const item = new Menu(req.body);
    await item.save();
    res.status(201).json(item);
    await database.disconnect();
  } catch (error) {
    res.status(500).json(error);
  }
};
