import { Schema, model, connect } from 'mongoose';

interface IBook {
    title : string,
    author : string,
    publishYear : number,
    createdAt : Date,
    updatedAt : Date
}

export default IBook