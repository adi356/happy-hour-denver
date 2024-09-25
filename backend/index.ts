import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { getAllBarsController } from './src/controllers'


//** Provide PORT in .env file */

dotenv.config()

const app: Express = express()
const port = process.env.PORT

console.log(process.env.PORT)

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })) // For parsing application/x-www-form-urlencoded (might not actually need)
app.use(cors())

//TODO: Could move endpoints to seperate folder and file
// endpoints(routes)
app.get('/all-bars', getAllBarsController)


//** Must provide CONNECTION_STRING in .env file */
// Connect to MongoDB Cluster using mongoose
mongoose.connect(process.env.CONNECTION_STRING!).then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}).catch(e => {
    console.log('Connection failed')
})