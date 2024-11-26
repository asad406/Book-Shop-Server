import express, { Application } from 'express'
import cors from 'cors'

const app:Application = express()
app.use(express.json())
app.use(cors())

//Application routes
app.use('api/products')

export default app


