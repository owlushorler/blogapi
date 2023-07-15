const express = require('express')
const app = express()
const router = express.Router()
const data = require('../control/get8')

router.get('/', data )

module.exports = router
