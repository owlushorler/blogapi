const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const router = express.Router()
const data = require('../control/post3')


router.put('/:id', data )

module.exports = router



