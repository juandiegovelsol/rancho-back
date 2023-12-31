import User from "../models/user.js";
import Database from "../config/database.js";

export const createUser = async (req, res) => {
  try {
    const database = new Database();
    await database.connect();
    const item = new User(req.body);
    await item.save();

    res.status(201).json(item);
    await database.disconnect();
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const database = new Database();
    await database.connect();
    const data = await User.find();
    await database.disconnect();
    if (data.length) return res.status(200).json(data);
    return res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateOneUser = async (req, res) => {
  try {
    const database = new Database();
    await database.connect();
    let item = req.body.items[0];
    item = Object.assign(item, req.body);
    const updatedUser = await item.save();
    await database.disconnect();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    res.json(req.body.items[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const changeRole = async (req, res) => {
  try {
    const database = new Database();
    await database.connect();
    let user = req.body.user[0];
    user = user.admin
      ? Object.assign(user, { admin: false })
      : Object.assign(user, { admin: true });
    const updatedUser = await user.save();
    await database.disconnect();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
