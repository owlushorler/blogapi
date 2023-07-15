const joi = require('joi')

const jo = async (req,res,next)=>{
   const jam = joi.object({
    username:joi.string().required(),
    password:joi.string().required(),
    jwt:joi.string()
   })
    try{
    const {error,value}=jam.validate(req.body)
    if(error){
        res.status(400).json({msg:error.message})
    }

    next()

   }catch(e){console.log(e)}
 
}


module.exports = jo