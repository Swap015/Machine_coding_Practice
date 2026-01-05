
import express from "express";
import { createBook, deleteBook, EditBook, getBook } from "./bookController.mjs";

const router = express.Router();


router.post("/add", createBook);
router.get("/", getBook);
router.put("/edit/:id", EditBook);
router.delete("/delete/:id", deleteBook);

export default router;