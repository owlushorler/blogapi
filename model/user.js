const express = require('express')
const mongoose = require('mongoose')
const schema = mongoose.Schema


const sch = new schema({
    username:{
        type:'string',
        required:true,
        
    },
    password:{
        type:'string',
        required:true
    },

    jwt:"string"
})

module.exports = mongoose.model('userr',sch)