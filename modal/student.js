import  Mongoose from "mongoose";
const studentSchema=new Mongoose.Schema({
  //  id:Mongoose.Types.ObjectId, optional
  id:String,
name:String,
phone:Number,
department:String,
 
})
 export const studentModal=Mongoose.model("studentSchema",studentSchema)