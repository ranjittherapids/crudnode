import express from 'express';
import  Mongoose from 'mongoose';
import router from './routes/student.js';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';

const app=express()
const PORT= process.env.PORT || 5000;
const CONNECTION_URL="mongodb+srv://ranjit:123@cluster0.wypi3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
Mongoose.connect(CONNECTION_URL);
Mongoose.connection.on('error',err=>app.listen(PORT,()=>console.log(err,"hello")))
Mongoose.connection.on('connected',connected=>app.listen(PORT,()=>console.log(connected ,"hellos")))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/", userRouter)
app.use("/", router)

app.use((req,res)=>{
res.status(404).json({error:"bad request"})
})