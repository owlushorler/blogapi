const express = require('express')
const { string } = require('joi')
const mongoose = require('mongoose')
const schema = mongoose.Schema


const sch = new schema({
  subject:"string",
  week:"number",
  name:"string",
  signdate:"number",
  matricNumber:"string"
})

module.exports = mongoose.model('userr',sch)