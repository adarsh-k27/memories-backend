import mongoose from 'mongoose'
import PostSchema from '../models/post.js'
export const Create_Post = async (req, res) => {
    try {
        const data = req.body

        const create_post = new PostSchema(data)
        create_post.save((err, data) => {
            if (err) return res.status(500).json({
                message: "Data Not Saved",
                error: err
            })
            else return res.status(200).json({
                message: "DataSaved"
            })


        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error
        })

    }
}
//Loading
export const Fetch_All_Posts = () => {

}

export const Fetch_Post = async (req, res) => {
    try {
        const {
            id
        } = req.params
        console.log(req.params);
        const post = await PostSchema.findById(id)
        if (post) return res.status(200).json({
            message: "success",
            post
        })
        else return res.status(404).json({
            error: "Product Id Is Not Valid"
        })
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            message: "Something Went Wrong Please Check Your Connection"
        })
    }
}

export const Update_Post = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const data = req.body
        const update_post = await PostSchema.findByIdAndUpdate(id, {
            ...data
        }, {
            new: true,
            upsert: true
        })
        if (update_post) {
            return res.status(200).json({
                message: "Updt success",
                post: update_post
            })
        } else return res.status(400).json({
            message: "Updation nnot happens"
        })
    } catch (error) {
        console.log(error);
    }
}
//Loading
export const Find_Most_Liked_Post=async(req,res)=>{
    try{
   const post=await PostSchema.find({

   })
    }
    catch(error){
        console.log(error);
    }
}
//loading
export const LikePost=async(req,res)=>{
    try{

    }
    catch(error){
        console.log(error);
    }
}