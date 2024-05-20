const jwt = require('jsonwebtoken')
require('dotenv').config()
const datt = require('../model/user') 

const man = async(req,res)=>{

    const {week, subject} = req.body

    const wks =await  datt.find({week:week})

    //
    const dam = wks.filter((ele)=>ele.subject === subject )

    //res.status(200).json({cust:dam})}
    res.status(200).json({cust:"go home my g"})}
   



module.exports = man