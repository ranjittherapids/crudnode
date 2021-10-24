import { studentModal } from "../modal/student.js"

export const getstudent = async (req, res) => {
    try {
        const allstudent = await studentModal.find();
        res.status(200).json({
            student: allstudent
        })
    }
    catch (err) {
        res.status(400).json({
            student: "not fond student"
        })
    }

}
export const postStudent = (req, res) => {
    const student = new studentModal({
        name: req.body.name,
        phone: req.body.phone,
        department: req.body.depatment,
        id: req.body.id
    })
    student.save()
        .then(ok => {
            res.status(200).json({
                message: ok
            })
        })
        .catch(err => {
            res.status(400).json({
                message: err
            })
        })
}

export const getStudentByID = (req, res) => {
    studentModal.findById(req.params.id)
        .then(ok => {
            res.status(200).json({
                message: ok
            })
        })
        .catch(err => {
            res.status(400).json({
                message: err
            })
        })
}
export const deleteStudentByID = (req, res) => {
    studentModal.remove({ name: req.params.id })
        .then(ok => {
            res.status(200).json({
                message: ok
            })
        })
        .catch(err => {
            res.status(400).json({
                message: err
            })
        })
}
export const updateStudentByid=(req,res)=>{
    studentModal.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name: req.body.name,
            roll: req.body.roll,
            email: req.body.email,
            gender: req.body.gender
        
        }
    }
        )
        .then(ok => {
            res.status(200).json({
                message: ok
            })
        })
        .catch(err => {
            res.status(400).json({
                message: err
            })
        })
}
export const updateStudentByidpatch=(req,res)=>{
    studentModal.findByIdAndUpdate({_id:req.params.id},{
        $set:{
            roll:req.body.roll
        }
    })
    .then(ok => {
        res.status(200).json({
            message: ok
        })
    })
    .catch(err => {
        res.status(400).json({
            message: err
        })
    })
}