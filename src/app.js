import express from "express";
import cors from "cors";
import UserRoute from "./routes/user.route.js";
import MenuRoute from "./routes/menu.route.js";
import OrderRoute from "./routes/order.route.js";
import "dotenv/config";

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Rancho back-end" });
});

app.use("/user", UserRoute);
app.use("/menu", MenuRoute);
app.use("/order", OrderRoute);

app.listen(PORT, () => {
  console.log(`Initialized asessment server on port ${PORT}...`);
});
