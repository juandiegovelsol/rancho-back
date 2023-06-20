import express from "express";
import {
  createDish,
  deleteDish,
  getMenu,
  updateDish,
} from "../controllers/menu.controller.js";
import { findUser, isAdmin, isLogged } from "../middlewares/user.middle.js";
import { findDish } from "../middlewares/menu.middle.js";

const router = express.Router();

router.post("/admin/:key/:value", findUser, isAdmin, isLogged, createDish);
router.get("/", getMenu);
router.put("/:key/:value", findDish, updateDish);
router.delete("/:key/:value/:id", findUser, isAdmin, isLogged, deleteDish);

export default router;
