require('dotenv').config()
const express = require('express')
const {cl, dateString} = require('goosefuncs') //^ npm package, the cl() is a function for console.log and dateString() prints the current dtae and time.
const cors = require('cors')
const mongoose = require('mongoose')

//^ Importing Routes
const reloadRoutes = require('./routes/reload.routes')

const app = express()

//^ Setting up middileware
app.use(cors())
app.use(express.json())

app.use('/api/reload', reloadRoutes)

//* Connect to MongoDB
mongoose.connect(process.env.URI, { dbName: process.env.DATABASE_NAME})
    .then(() => {
        cl("Connect to MongoDB - " + `DATABASE: ${process.env.DATABASE_NAME}`)
        app.listen(process.env.PORT, () => {
            cl(`Server running on PORT:${process.env.PORT} - ${dateString()}`)
        })
    })
