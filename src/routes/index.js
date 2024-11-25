import express from 'express'
import { userRouter } from './user.routes.js'
const router=express.Router()
mainRouter.use('/user', userRouter)
mainRouter.use('/', router)