import express, { Router } from "express";
import {
  createUser,
  getAllUser,
  updateOneUser,
  getUser,
  changeRole,
} from "../controllers/user.controller.js";
import {
  findUser,
  findUserAux,
  isAdmin,
  isLogged,
} from "../middlewares/user.middle.js";
const router = express.Router();

router.get("/admin/:key/:value", findUser, isAdmin, isLogged, getAllUser);
router.get("/:key/:value", findUser, getUser);
router.post("/", createUser);
router.put("/:key/:value", findUser, updateOneUser);
router.put(
  "/admin/:key/:value/:key1/:value1/",
  findUser,
  isAdmin,
  isLogged,
  findUserAux,
  changeRole
);

export default router;
