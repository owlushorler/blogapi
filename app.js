const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const DB = process.env.DB 
const jwt = require('jsonwebtoken')
const bc = require('bcrypt')
mongoose.connect("mongodb+srv://owlushorler:Shola3819@owlushorler.2hspzcb.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log('connected to the DB')).catch((e)=>console.log(e))

const middle1 = require('./middleware/user')


app.use('/',require('./router/attence'))

app.listen(PORT, ()=>console.log(`listening on ${PORT}`))
