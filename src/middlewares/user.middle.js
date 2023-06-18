import Database from "../config/database.js";
import User from "../models/user.js";

export const findUser = async (req, res, next) => {
  try {
    const database = new Database();
    await database.connect();
    const { key, value } = req.params;
    let query = {};
    query[key] = value;
    const items = await User.find(query);
    await database.disconnect();
    if (!items.length) return res.status(204).send();
    req.body.items = items;
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const { items } = req.body;
    const isAdmin = items[0].admin;
    if (!isAdmin) return res.status(401).send();
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};
