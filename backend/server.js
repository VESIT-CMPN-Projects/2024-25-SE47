import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTENDURL,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to Arasco India Private Limited!");
}),
  app.listen(process.env.PORT, () => {
    console.log("Running on PORT " + process.env.PORT);
  });
