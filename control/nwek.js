const jwt = require('jsonwebtoken')
require('dotenv').config()
const datt = require('../model/user') 

const nweek = async(req,res)=>{
   const {subject,week,name,signdate,matricNumber,} = req.body
    try{
        const weeks  = await datt.find({week:"3"})
        const wem = [weeks]
        const namess =  weeks.filter((ele) => ele.matricNumber === matricNumber)
        if(namess.length == 0){
            const data = new datt({
                subject,
                week,
                name,
                signdate,
                matricNumber,


        
            })                                                    
        
            data.save()

            res.status(200).json({msg:"attendance marked"})}

            else{
                res.status(400).json({msg:"this matric number has marked attendanced already"})   

            }

            

     
           
           
           
           
            
        }
      //  const wk = await datt.find()
   
   // const dat = await datt.find({weeks:"3"})
  //  if(dat){
      //  res.status(200).json({msg:"the attendce for this week has been summitted"})
   // }

  
   catch(e){res.status(404).json({msg:e.message})}
}


module.exports = nweek