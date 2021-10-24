import { userModal } from "../modal/user.js"
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken"
export const sineupUser = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(200).json({
                error: err
            })
        }
        else {
            const user = new userModal({
                userName: req.body.userName,
                password: hash,
                phone: req.body.phone,
                email: req.body.email,
                userType: req.body.userType
            })
            user.save()
                .then(result => {
                    res.status(200).json({
                        data: result
                    })
                })
                .catch(result => {
                    res.status(400).json({
                        data: result
                    })
                })
        }
    })
}
export const getUser =  (req, res) => {
    const users =  userModal.find({
        userName: req.body.userName
    })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(400).json({
                    message: "user not fond"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (!result) {
                    return res.status(400).json({
                        message: "password not correct"
                    })
                }
                if (result) {
                    const token = Jwt.sign({
                        userName: user[0].userName,
                        userType: user[0].use,
                        email: user[0].email,
                    },
                        'this is dummy text',
                        {
                            expiresIn: "24h"
                        })
                    res.status(200).json({
                        userName: user[0].userName,
                        userType: user[0].use,
                        email: user[0].email,
                        token: token
                    })
                }
            })
        })
         .catch(err => {
            res.status(400).json({
                user: "not fond student"
            })
        })

}