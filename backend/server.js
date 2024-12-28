import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import EmailHandler from "./email.js";
dotenv.config();

const app = express();

app.use(express.json())
// app.use(
//   cors({
//     origin: process.env.FRONTENDURL,
//   })
// );
app.use(cors())

app.get("/", (req, res) => {
  res.send("Welcome to Arasco India Private Limited!");
})

app.post("/email", EmailHandler.sendCustomerMail)

  app.listen(process.env.PORT, () => {
    console.log("Running on PORT " + process.env.PORT);
  });
