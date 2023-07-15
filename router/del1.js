const express = require('express')
const app = express()
const router = express.Router()
const data = require('../control/dele1')

router.delete('/:id' , data)


module.exports = router