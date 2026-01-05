import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookDesc: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    }
});

export default mongoose.model("Book", bookSchema);
