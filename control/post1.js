const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const sch =  require('../model/login')
require('dotenv').config()
const lov = async (req,res)=>{
    const { title, contentField} = req.body
    try {
       
    const bear = await req.headers.authorization
 
    const dat =  jwt.verify(bear,process.env.PORT)

    const da = new sch({
        title,
       contentField
    })
       da.save() 

  
     
        res.status(200).json({da})}
        catch(e){res.json({msg:e.message})}
    
    
}

module.exports = lov