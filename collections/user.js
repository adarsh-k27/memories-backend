import UserModel from '../models/user.js'
import bcrypt from 'bcrypt'
export const UserSignUp = async (req, res) => {
    try {
        const data = req.body
        const userCreate = new UserModel(data)
        userCreate.save((err, data) => {
            if (err) return res.status(400).json({
                message: "SignUp Fails"
            })
            else return res.status(200).json({
                message: "SignUp Success"
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something Wrong Happens"
        })

    }
}

export const UserSignIn = async (req, res) => {
    try {
        const {
            method
        } = req.params
        const data = req.body
        const alreadyRegistered=await UserModel.findOne({email:data.email})
        if(alreadyRegistered){
            //check for passsword
            if(method=="email"){
                const changedpass=await bcrypt.compare(data.password,alreadyRegistered.password)
                if(changedpass){
                    return res.status(200).json({message:"login Success"})
                }
                else return res.status(400).json({message:"Login Failed"})
            }
        }
        else{
          if(method=="google"){
            const userCreate = new UserModel(data)
            userCreate.save((err, data) => {
                if (err) return res.status(400).json({
                    message: "SignUp Fails"
                })
                else return res.status(200).json({
                    message: "SignUp Success"
                })
            })
          }
          else return res.status(400).json({message:"Email Is Not Registered"})
        }
    } catch (error) {
        console.log(error);
    }
}