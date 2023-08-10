import dotenv from "dotenv";

dotenv.config();

import express from "express";
import mongoose from "mongoose"
import Routes from "../api/Routes/index.js";
import cors from "cors"

//
const app = express();

//middleware
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(express.urlencoded({ extended: true }));
//Route
app.use(Routes);
//Connect
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected...!");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
