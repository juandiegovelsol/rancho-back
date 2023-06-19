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

export const getMenu = async (req, res) => {
  try {
    const database = new Database();
    await database.connect();
    const data = await Menu.find();
    await database.disconnect();
    if (data.length) return res.status(200).json(data);
    return res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDish = async (req, res) => {
  try {
    const database = new Database();
    await database.connect();
    let item = req.body.items[0];
    item = Object.assign(item, req.body);
    const updatedDish = await item.save();
    await database.disconnect();
    res.json(updatedDish);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const database = new Database();
    await database.connect();
    const deletedDish = await Menu.findByIdAndRemove(id);
    await database.disconnect();
    if (!deletedDish.length)
      return res.status(204).json({ message: "Dish not found" });
    res.status(200).json(deletedDish);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
