import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import EmailHandler from "./email.js";
dotenv.config();

const app = express();

app.use(express.json())
app.use(
  cors({
    origin: (origin, callback) => {
      const originWithoutSlash = origin ? origin.replace(/\/$/, '') : origin;
      const allowedOrigin = process.env.FRONTENDURL;

      if (originWithoutSlash === allowedOrigin || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to Arasco India Private Limited!");
})

app.post("/email", EmailHandler.sendCustomerMail)

  app.listen(process.env.PORT, () => {
    console.log("Running on PORT " + process.env.PORT);
  });
