import mongoose from "mongoose";
import express from "express"
import "dotenv/config"
const app=express()
const port=process.env.PORT 
const url= process.env.MONGO_URL
app.use('/api', mainRouter)

mongoose
.connect(url)
.then(()=>{
    console.log("connected to database Mangodb")
})
.catch((err)=>{
    console.log(err)
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)})