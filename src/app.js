import express from "express";
import cors from "cors";

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Rancho back-end" });
});

app.listen(4000, () => {
  console.log(`Initialized asessment server on port ${4000}...`);
});
