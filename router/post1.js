const express = require('express')
const app = express()
const router = express.Router()
const data = require('../control/post1')


router.post('/', data )

module.exports = router