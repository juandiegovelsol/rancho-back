import express from "express";
import cors from "cors";
import UserRoute from "./routes/user.route.js";
import "dotenv/config";

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Rancho back-end" });
});

app.use("/user", UserRoute);

app.listen(PORT, () => {
  console.log(`Initialized asessment server on port ${PORT}...`);
});
