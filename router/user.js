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
const router = express.Router()
const data = require('../control/user')

router.post('/', data)

module.exports= router