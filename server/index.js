const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const itemRoute = require('./routes/products')

env.config()

const application = express()
application.use(express.json())

application.use("/api/products",itemRoute)

mongoose.connect(process.env.CONNECTION_STRING, () => {
    console.log('\x1b[42m%s\x1b[0m',"[SUCCESS] DB Connected !")
})

application.listen(8000,() => {
    console.log('\x1b[42m%s\x1b[0m',"[SUCCESS] Server started at port 8000!")
})