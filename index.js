import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import mongoose from 'mongoose'
import PostRouter from './routes/post.js'
import UserRouter from './routes/user.js'
import  bodyParser from 'body-parser'
const app=express()
//dotenv config
config()
const PORT= process.env.PORT || 5000
const DB_URL=process.env.DB_URL

//mongodb Connection
mongoose.connect(DB_URL)
mongoose.connection.
once('open',()=>console.log("Mongo Db Connected SuccesFully...."))
.on('error',()=>console.error("error:::",error))


//middlewares
app.use(cors())
app.use(bodyParser.json())
app.use('/memories/api/posts/', PostRouter)
app.use('/memories/api/user/',UserRouter)
app.get('/',(req,res)=>{
    res.send("Server Working Succesfully")
})
//connecting server
app.listen(PORT,()=>console.log("Server Connected Succesfylly",PORT))