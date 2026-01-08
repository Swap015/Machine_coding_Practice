import express from "express";
import mongoose from "mongoose";

import bookRoutes from "./Routes/bookRoutes.mjs";

const app = express();
const PORT = 5000;

app.use(express.json());

//mongodb+srv://swapnil:5Z58shOC1mLm60Qt@attendance-tracker.nitfwe7.mongodb.net/

mongoose.connect("mongodb://127.0.0.1:27017/nawinnn")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));



app.use("/api/books", bookRoutes);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
