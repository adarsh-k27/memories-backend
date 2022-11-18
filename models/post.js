import mongoose, {
    Mongoose
} from 'mongoose'
import slugify from 'slugify'
import slug from 'slugify'

const PostSchema = mongoose.Schema({
    creater:{
      type:mongoose.Types.ObjectId,
      ref:'users'
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    shortDesc: {
        type: String,
        required: true,
    },
    Desc: {
        type: String,
        required: true
    },
    tags: [String],
    image: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    comments: [
        [{
            id: {
                type: mongoose.Types.ObjectId,
                ref: 'user'
            },
            cmt: {
                type: String,
                required: true
            }
        }]
    ]
})

PostSchema.pre("save", async function (next) {
   if(this.title){
     this.title = await slugify(this.title)
     
   }
   next()
})
export default mongoose.model('posts', PostSchema)