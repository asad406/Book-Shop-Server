import express, { Application } from 'express'
import cors from 'cors'
import bookRouter from './module/product/book.route'

const app:Application = express()
app.use(express.json())
app.use(cors())

//Application routes
app.use('/api/books', bookRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

export default app


