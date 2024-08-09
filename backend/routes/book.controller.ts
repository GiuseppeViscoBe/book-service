import { Request, Response, NextFunction } from "express";
import Book from "../models/book.schema";
import { CustomError } from "../models/customError.interface";

const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await Book.find({});

    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookId = req.params.id;

    const book = await Book.findById(bookId);

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const postBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, author , publishYear} = req.body;

    const newBook = new Book({
      title: title,
      author: author,
      publishYear : publishYear,
      createdAt : Date.now()
    });

    const existingBook = await Book.find({
      title: title,
    });

    if (existingBook.length > 0) {
      const error: CustomError = new Error(
        "Book already exists in the catalogue"
      );
      error.statusCode = 409;
      throw error;
    }

    const savedBook = await newBook.save();


    //await Book.insertMany(books);

    res.status(200).json(savedBook);
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const {id} = req.params
    const { title, author , publishYear} = req.body;

    const update = {
      title: title,
      author: author,
      publishYear : publishYear,
      updatedAt : Date.now()
    };

    const existingBook = await Book.findById(id);

    if (existingBook == null) {
      const error: CustomError = new Error(
        "Book does not exists in the catalogue"
      );
      error.statusCode = 404;
      throw error;
    }

    const updatedBook = await Book.findByIdAndUpdate(id, update);

    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const existingBook = await Book.findById(id);


    if (existingBook == null) {
      const error: CustomError = new Error(
        "Book does not exists in the catalogue"
      );
      error.statusCode = 404;
      throw error;
    }

    const deletedBook = await Book.findByIdAndDelete(id);

    res.status(200).json(deletedBook);
  } catch (error) {
    next(error);
  }
};

export default {
  getBooks,
  getBookById,
  postBooks,
  updateBook,
  deleteBook
};
