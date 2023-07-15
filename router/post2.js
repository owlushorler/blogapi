const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const router = express.Router()
const data = require('../control/post2')


router.get('/:id', data )

module.exports = router



