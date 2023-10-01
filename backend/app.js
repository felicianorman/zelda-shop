const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors');

const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;

const productRouter = require('./router/productRouter')

app.use('/api/v1/products', productRouter)

async function run() {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.MONGO_DB)
        console.log(`MongoDB connected at ${conn.connection.host}`)

        app.listen(4000, () => {
            console.log(`Server running at http://localhost:${port}`)
        })
    } catch(error) {

    }
}

run()