import express, { Application } from 'express'
import bookRouter from './../routes/book.router'
import connectDb from './db.config'


const app : Application = express()

connectDb()

app.use(express.json())
app.use('/api',bookRouter)

export default app


