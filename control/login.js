const data = require('../model/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')

const login = async(req,res)=>{
    
    const {username,password}=req.body
    if(!username || !password){
        res.status(404).json({msg:'all the file must be filled'})
    }

   

    const mon = await data.findOne({username})
    if(!mon){
        res.status(400).json({msg:'user dont not exit'})
    }
    bcrypt.compare(password,mon.password, async (error,result)=>{
        if(error){console.log(error)}
        if(!result){res.status(401).json({msg:"password doest match"})}
        else{
            const ne = new data({
                username:mon.username,
                password:mon.password
            })
        
            const da = jwt.sign({ne:ne},process.env.PORT)
            
          const uou = await data.updateOne({username:mon.username}, {$set:{jwt:da}})
        
            res.status(200).json({da})
        }
    })

  
}


module.exports = login