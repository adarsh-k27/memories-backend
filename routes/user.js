import express from 'express'
import {UserLogin} from '../collections/user.js'
const router=express.Router()

router.post('/login',UserLogin)

export default router;