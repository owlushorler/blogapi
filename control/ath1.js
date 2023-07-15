const express = require('express')
const app = express()
const router = express.Router() 
const jwt = require('jsonwebtoken')
require('dotenv').config()
const sch =  require('../model/login')

const auth = async (req,res)=>{
    try{
    const bear =await req.headers.authorization
   const dat =  jwt.verify(bear,process.env.PORT )
   const daa =await sch.find()
   
   
      res.status(200).json({daa})}
      catch(e){res.status(404).json({msg:e.message})}
  }


  module.exports = auth