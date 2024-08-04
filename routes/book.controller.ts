import { Request, Response, NextFunction } from 'express';
import Book from '../models/book.schema';



const getBooks = async (req : Request, res : Response , next : NextFunction) => {

    try {
        
        const books = await Book.find({})

        res.status(200).json(books)
    } catch (error) {
        console.log(error)
    }

    
}

const postBooks = async (req : Request, res : Response , next : NextFunction) => {

    const books =  [
        {
            'name' : 'mala',
            'author' : 'Francesca Fagnani'
        },
        {
            'name' : 'L ombra del vento',
            'author' : 'Zafon'
        }
    ]

    try {
        
       await Book.insertMany(books)

        res.status(200).json(books)
    } catch (error) {
        console.log(error)
    }

}

export default {
    getBooks,
    postBooks
}