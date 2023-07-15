const data = require('../model/user')
const bcrypt = require('bcrypt')

const user =  async(req,res)=>{
  const   {username, password} = req.body
 
  try  {
    const  mon = await data.findOne({username})
  if(!username || !password){
    res.status(401).json({msg:'your name and password must be provide'})}

    if(mon){
        res.status(400).json({msg:'user exit'})
    }

    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hash(password, salt)
    
    


  const user = new data({
    username,
    password:hash
  })
  user.save()
  
res.status(200).json({msg:'account was created successfully'})} 
    catch(e){console.log(e)}
 }

 module.exports = user