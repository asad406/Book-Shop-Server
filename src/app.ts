import express, { Application } from 'express'
import cors from 'cors'

const app:Application = express()
app.use(express.json())
app.use(cors())

//Application routes
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

export default app


