import Database from "../config/database.js";
import Menu from "../models/menu.js";

export const findDish = async (req, res, next) => {
  try {
    const database = new Database();
    await database.connect();
    const { key, value } = req.params;
    let query = {};
    query[key] = value;
    const items = await Menu.find(query);
    await database.disconnect();
    if (!items.length) return res.status(204).send();
    req.body.items = items;
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};
