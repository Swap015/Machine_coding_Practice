import express from "express";
import mongoose from "mongoose";

import bookRoutes from "./bookRoutes.mjs";

const app = express();
const PORT = 5000;

app.use(express.json());


mongoose.connect("mongodb+srv://swapnil:5Z58shOC1mLm60Qt@attendance-tracker.nitfwe7.mongodb.net/")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));



app.use("/api/books", bookRoutes);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
