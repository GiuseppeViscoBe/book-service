import express, { Application } from 'express'
import bookRouter from './routes/book.router'
import app from './config/app.config'


const PORT : Number = Number(process.env.PORT) || 8000


app.listen(PORT, () => {
    console.log('Server listening on port : ' + PORT)
})