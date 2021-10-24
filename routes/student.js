import express from 'express'
import { getstudent,postStudent,getStudentByID,deleteStudentByID ,updateStudentByid,updateStudentByidpatch} from '../controller/student.js'
import checkAuth from '../middleware/checkAuth.js'
const router=express.Router()

router.get('/getStudent',checkAuth,getstudent)//find all student
router.post('/addStudent',checkAuth,postStudent)//add student
router.get('/:id',checkAuth,getStudentByID)//particular student by id
router.delete('/delete/:id',checkAuth,deleteStudentByID)//particular student by delete
router.put('/update/:id',checkAuth,updateStudentByid)//particular student by delete
router.patch('/updatebypatch/:id',checkAuth,updateStudentByidpatch)//particular student by delete

export default router
