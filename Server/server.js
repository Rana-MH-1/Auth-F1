const express = require('express');
const { ConnectDB } = require('./Config/ConnectDB');
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const UserRouter = require('./Routes/UserRouter')

app.use(express.json())
app.use('/api/users', UserRouter )

mongoose.set('strictQuery', true)
ConnectDB()


const PORT = process.env.PORT || 7000;
app.listen(PORT, err=> err? console.log(err) : console.log(`Server is running on ${PORT}...`))