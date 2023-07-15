const express = require('express')
const app = express()
require('dotenv').config()
const jwt = require('jsonwebtoken')
const data = require('../model/user')



const maa = async (req,res)=>{
   try{
    const dear = req.headers.authorization

    const da = jwt.verify(dear, process.env.PORT)
    const id = req.params.id
    const dataa = await data.findById(id)
    if(!dataa){res.status(404).json({msg:'the id is wrong'})}
    res.status(200).json({dataa})}
    catch(e){res.status(200).json({msg:e.message})}
}


module.exports = maa