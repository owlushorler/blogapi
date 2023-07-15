const express = require('express')
const app = express()
require('dotenv').config()
const jwt = require('jsonwebtoken')
const data = require('../model/login')



const maa = async (req,res)=>{
    const {title,contentField}=req.body
   try{
    const dear = req.headers.authorization

    const da = jwt.verify(dear, process.env.PORT)
    const id = await req.params.id
    const up = await data.updateOne({_id:id},{$set:{title,contentField}})
    res.status(200).json({up})}
    catch(e){res.status(200).json({msg:e.message})}
}


module.exports = maa