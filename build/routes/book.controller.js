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
        res.status(200).json(books);
    }
    catch (error) {
        console.log(error);
    }
});
const postBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const books = [
        {
            'name': 'mala',
            'author': 'Francesca Fagnani'
        },
        {
            'name': 'L ombra del vento',
            'author': 'Zafon'
        }
    ];
    try {
        yield book_schema_1.default.insertMany(books);
        res.status(200).json(books);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = {
    getBooks,
    postBooks
};
