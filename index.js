import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import mongoose, { Mongoose } from 'mongoose'

const app=express()
//dotenv config
config()
const PORT= process.env.PORT || 5000
const DB_URL=process.env.DB_URL
console.log("yrl",DB_URL);
//mongodb Connection
mongoose.connect(DB_URL)
mongoose.connection.
once('open',()=>console.log("Mongo Db Connected SuccesFully...."))
.on('error',()=>console.error("error:::",error))


//middlewares
app.use(cors())
app.get('/',(req,res)=>{
    res.send("Server Working Succesfully")
})
//connecting server
app.listen(PORT,()=>console.log("Server Connected Succesfylly",PORT))