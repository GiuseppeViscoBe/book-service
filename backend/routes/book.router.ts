import express from 'express'
import bookController from './book.controller'

const bookRouter = express.Router()

bookRouter.get('/', bookController.getBooks)
bookRouter.get('/:id', bookController.getBookById)
bookRouter.post('/', bookController.postBooks)
bookRouter.put('/:id', bookController.updateBook)
bookRouter.delete('/:id', bookController.deleteBook)


export default bookRouter

