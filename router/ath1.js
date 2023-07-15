const express = require('express')
const app = express()
const router = express.Router() 
const jwt = require('jsonwebtoken')
require('dotenv').config()
const data = require('../control/ath1')


router.get('/',data)

module.exports = router