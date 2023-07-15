const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()
const data = require('../model/login')



const da = async(req,res)=>{
    const dear = req.headers.authorization

    const id = req.params.id
    try{
    const man = jwt.verify(dear, process.env.PORT)

    const da = await data.deleteOne({_id:id})
    
    res.status(200).json({da})}
    catch(e){res.status(200).json({msg:e.message})}
}

module.exports = da               

