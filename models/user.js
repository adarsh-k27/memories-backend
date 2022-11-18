import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        lowerCase:true
    },
    profile:{
        type:String,
        required:false,
        default:"jkhihqk.png"
    },
    method:{
        type:String,
        required:true,
        enum:["google","email"]
    },
    
})

UserSchema.pre('save',async function(){
  if(this.password){
    const newpass=await bcrypt.hash(this.password,10)
    this.password=newpass
    console.log("hash",newpass);
  }
})

const userModel=mongoose.model('user',UserSchema)

export default userModel;