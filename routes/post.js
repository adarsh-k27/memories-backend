import express from 'express'
import {Create_Post, Fetch_Post, Update_Post} from '../collections/post.js'
const router=express.Router()

router.post('/create',Create_Post)
router.get('/find/:id',Fetch_Post)
router.patch('/update/:id',Update_Post)
router.get('/find/likes',)
export default router ;