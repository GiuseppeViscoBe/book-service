import { Schema, model, connect } from 'mongoose';
import IBook from './book.interface'


const bookSchema = new Schema<IBook>({
    name : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    }
})

const Book = model<IBook>('Book', bookSchema)

export default Book