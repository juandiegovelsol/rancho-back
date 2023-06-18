import express, { Router } from "express";
import {
  createUser,
  getAllUser,
  updateOneUser,
  getUser,
} from "../controllers/user.controller.js";
import { findUser, isAdmin } from "../middlewares/user.middle.js";
const router = express.Router();

router.get("/admin/:key/:value", findUser, isAdmin, getAllUser);
router.get("/:key/:value", findUser, getUser);
router.post("/", createUser);
router.put("/:key/:value", findUser, updateOneUser);

export default router;
