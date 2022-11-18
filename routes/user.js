import express from 'express'
import {UserSignIn,UserSignUp} from '../collections/user.js'
const router=express.Router()

router.post('/signin/:method', UserSignIn)
router.post('/signup',UserSignUp)

export default router;