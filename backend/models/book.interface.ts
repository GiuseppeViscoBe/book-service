import { Schema, model, connect } from 'mongoose';

interface IBook {
    name : string,
    author : string
}

export default IBook