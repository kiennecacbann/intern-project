import express from "express";
import { createBook, searchBook } from "../Controllers/index.js";

const bookRoute = express.Router();
bookRoute.post("/", createBook);
bookRoute.get("/:id",searchBook);
export default bookRoute;
