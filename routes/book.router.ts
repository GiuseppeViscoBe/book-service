import express from 'express'
import bookController from './book.controller'

const bookRouter = express.Router()

bookRouter.get('/', bookController.getBooks)
bookRouter.get('/:id', bookController.getBookById)
bookRouter.post('/', bookController.postBooks)
bookRouter.put('/', bookController.updateBook)
bookRouter.delete('/:name', bookController.deleteBook)


export default bookRouter

