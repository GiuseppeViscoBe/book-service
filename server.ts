import express from 'express'

const app = express()

const PORT : Number = 8001


app.listen(PORT, () => {
    console.log('Server listening on port : ' + PORT)
})