const express = require('express')
const mysql =require('mysql')
const cors=require('cors')
const app=express()
app.arguments(cors());
app.listen(8082,()=>{
    console.log("Listening........");
})