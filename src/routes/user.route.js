import express, { Router } from "express";
import {
  createUser,
  getAllUser,
  updateOneUser,
  getUser,
} from "../controllers/user.controller.js";
import { findUser } from "../middlewares/user.middle.js";
const router = express.Router();

router.get("/", getAllUser);
router.get("/:key/:value", findUser, getUser);
router.post("/", createUser);
router.put("/:key/:value", findUser, updateOneUser);

export default router;
