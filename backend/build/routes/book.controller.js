"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_schema_1 = __importDefault(require("../models/book.schema"));
const getBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_schema_1.default.find({});
        res.status(200).json({
            count: books.length,
            data: books,
        });
    }
    catch (error) {
        next(error);
    }
});
const getBookById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.id;
        const book = yield book_schema_1.default.findById(bookId);
        res.status(200).json(book);
    }
    catch (error) {
        next(error);
    }
});
const postBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, author } = req.body;
        const newBook = new book_schema_1.default({
            name: name,
            author: author,
        });
        const existingBook = yield book_schema_1.default.find({
            name: name,
        });
        if (existingBook.length > 0) {
            const error = new Error("Book already exists in the catalogue");
            error.statusCode = 409;
            throw error;
        }
        const savedBook = yield newBook.save();
        //await Book.insertMany(books);
        res.status(200).json(savedBook);
    }
    catch (error) {
        next(error);
    }
});
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { updatedName, updatedAuthor } = req.body;
        const update = {
            name: updatedName,
            author: updatedAuthor,
        };
        const existingBook = yield book_schema_1.default.findById(id);
        if (existingBook == null) {
            const error = new Error("Book does not exists in the catalogue");
            error.statusCode = 404;
            throw error;
        }
        const updatedBook = yield book_schema_1.default.findByIdAndUpdate(id, update);
        res.status(200).json(updatedBook);
    }
    catch (error) {
        next(error);
    }
});
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const existingBook = yield book_schema_1.default.findById(id);
        if (existingBook == null) {
            const error = new Error("Book does not exists in the catalogue");
            error.statusCode = 404;
            throw error;
        }
        const deletedBook = yield book_schema_1.default.findByIdAndDelete(id);
        res.status(200).json(deletedBook);
    }
    catch (error) {
        next(error);
    }
});
exports.default = {
    getBooks,
    getBookById,
    postBooks,
    updateBook,
    deleteBook
};
