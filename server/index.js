import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRouter from "./Routers/AuthRouter.js";
import ErrorMiddleware from "./middlewares/ErrorMiddleware.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "https://recipe-management-app-tawny.vercel.app",
  })
);
app.use("/auth", AuthRouter);
app.use(ErrorMiddleware);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log("SERVER STARTED"));
  } catch (e) {
    console.log(e);
  }
}

startApp();
