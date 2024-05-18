const mongoose = require('mongoose')
const schema = mongoose.Schema


const dat = new schema({
   title:{
    type:'string',
    require: true
   } ,















































































   
   contentField:{
    type:'string',
    require: true
   } 
})

module.exports = mongoose.model('blog',dat)