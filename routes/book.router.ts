import express from 'express'
import bookController from './book.controller'

const bookRouter = express.Router()

bookRouter.get('/', bookController.getBooks)

