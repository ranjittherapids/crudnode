import  express from "express";
import { sineupUser ,getUser} from "../controller/user.js";
 const userRouter=express.Router()

userRouter.post('/login',getUser)
userRouter.post('/sinup',sineupUser)

export default userRouter;