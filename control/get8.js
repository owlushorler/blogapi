const jwt = require('jsonwebtoken')
require('dotenv').config()
const datt = require('../model/user') 

const man = async(req,res)=>{
    const bear = await req.headers.authorization
    try{
    const jj = jwt.verify(bear, process.env.PORT)
    const dat = await datt.find()
    res.status(200).json({dat})}
    catch(e){res.status(404).json({msg:e.message})}
}


module.exports = man