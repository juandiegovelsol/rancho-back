import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOneOrder,
  getUserOrders,
  updateOrder,
} from "../controllers/order.controller.js";
import { findUser, isAdmin, isLogged } from "../middlewares/user.middle.js";
import { findOrder, getAllOrder } from "../middlewares/order.middle.js";

const router = express.Router();

router.post("/:key/:value", findUser, isLogged, createOrder);
router.get(
  "/:key/:value",
  findUser,
  isAdmin,
  isLogged,
  getAllOrder,
  getAllOrders
);
router.get("/order/:key/:value", findOrder, getOneOrder);
router.get("/user/:key/:value", findUser, isLogged, getAllOrder, getUserOrders);
router.put("/:key/:value", findOrder, updateOrder);
router.delete("/:id", deleteOrder);
export default router;
