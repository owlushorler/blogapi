const express = require('express')
const app = express()
const router = express.Router()
const data = require('../control/attenc')
const nweek = require("../control/nwek")

router.get('/', data )
router.post('/wk', nweek )


module.exports = router
