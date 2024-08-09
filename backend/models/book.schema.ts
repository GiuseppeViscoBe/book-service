import { Schema, model, connect } from 'mongoose';
import IBook from './book.interface'


const bookSchema = new Schema<IBook>({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    publishYear : {
        type : Number
    },
    createdAt : {
        type : Date
    },
    updatedAt : {
        type : Date
    }
})

const Book = model<IBook>('Book', bookSchema)

export default Book