import express, { Application } from 'express'
import bookRouter from './../routes/book.router'
import connectDb from './db.config'
import errorHandler from '../middlewares/errorHandler'
import cors from 'cors';

const app : Application = express()

connectDb()

app.use(cors())
app.use(express.json())
app.use('/api/books',bookRouter)
app.use(errorHandler)

export default app


