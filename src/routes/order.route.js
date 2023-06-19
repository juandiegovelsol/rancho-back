import express from "express";
import {
  createOrder,
  getAllOrder,
  getOneOrder,
} from "../controllers/order.controller.js";
import { findUser, isAdmin, isLogged } from "../middlewares/user.middle.js";
import { findOrder } from "../middlewares/order.middle.js";

const router = express.Router();

router.post("/:key/:value", findUser, isLogged, createOrder);
router.get("/:key/:value", findUser, isAdmin, isLogged, getAllOrder);
router.get("/order/:key/:value", findOrder, getOneOrder);
export default router;
