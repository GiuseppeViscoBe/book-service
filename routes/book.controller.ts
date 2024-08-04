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
    const { name, author } = req.body;

    const newBook = new Book({
      name: name,
      author: author,
    });

    const existingBook = await Book.find({
      name: name,
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
    const { name, updatedName, updatedAuthor } = req.body;

    const filter = {
      name: name,
    };

    const update = {
      name: updatedName,
      author: updatedAuthor,
    };

    const existingBook = await Book.find({
      name: name,
    });

    if (existingBook.length == 0) {
      const error: CustomError = new Error(
        "Book does not exists in the catalogue"
      );
      error.statusCode = 404;
      throw error;
    }

    const updatedBook = await Book.findOneAndUpdate(filter, update);

    //await Book.insertMany(books);

    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.params;

    console.log('delete')
    const existingBook = await Book.find({
      name: name,
    });

    if (existingBook.length < 0) {
      const error: CustomError = new Error(
        "Book does not exists in the catalogue"
      );
      error.statusCode = 404;
      throw error;
    }

    const deletedBook = await Book.deleteOne({
        name : name
    });

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
