import Mongoose from "mongoose";
const userSchema=new Mongoose.Schema({
    id:Mongoose.Types.ObjectId,
userName:String,
password:String,
phone:Number,
email:String,
userType:String,
})
export const userModal=Mongoose.model("userSchema",userSchema)
// import  Mongoose from "mongoose";
// const studentSchema=new Mongoose.Schema({
//   //  id:Mongoose.Types.ObjectId, optional
//   id:String,
// name:String,
// phone:Number,
// department:String,
 
// })
//  export const studentModal=Mongoose.model("studentSchema",studentSchema)