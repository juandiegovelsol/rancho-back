import express from "express";
import { createDish } from "../controllers/menu.controller.js";
import { findUser, isAdmin, isLogged } from "../middlewares/user.middle.js";

const router = express.Router();

router.post("/admin/:key/:value", findUser, isAdmin, isLogged, createDish);

export default router;
