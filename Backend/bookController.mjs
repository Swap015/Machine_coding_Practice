
import Book from "./bookModel.mjs";


export const createBook = async (req, res) => {
    try {
        const book = Book.create(req.body);
        res.status(201).json({ msg: "Book created successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ books, msg: "Books fetched successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const EditBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ updatedBook, msg: "Book updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


