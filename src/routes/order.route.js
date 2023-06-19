import express from "express";
import { createOrder, getAllOrder } from "../controllers/order.controller.js";
import { findUser, isLogged } from "../middlewares/user.middle.js";
import { findOrder } from "../middlewares/order.middle.js";

const router = express.Router();

router.post("/:key/:value", findUser, isLogged, createOrder);
router.get("/", getAllOrder);
export default router;
