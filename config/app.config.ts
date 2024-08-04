import express, { Application } from 'express'
import bookRouter from './../routes/book.router'
import connectDb from './db.config'
import errorHandler from '../middlewares/errorHandler'


const app : Application = express()

connectDb()

app.use(express.json())
app.use('/api',bookRouter)
app.use(errorHandler)

export default app


