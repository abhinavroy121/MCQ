const {Router} = require('express')
const UserModel = require('../../model/User')
const AdminRouter = Router()
const bcrypt = require('bcrypt')

AdminRouter.get("/", async (req, res) => {
       res.send("admin page")
})


AdminRouter.post("/create", async (req, res) => {
     const quiz = await new UserModel(req.body)
     try{
        const salt = await bcrypt.genSalt(10);
        quiz.password = await bcrypt.hash(quiz.password, salt)

        quiz.save((err,success) => {
            if(err) return res.send(err,"error while adding")
              return res.send(success)
        })
     }
     catch(err){

     }
    
})

AdminRouter.post("/login", async (req, res) => {
    const body = req.body;
     let quiz = await UserModel.findOne({email:body.email})
     console.log(quiz)
     try{
           if(quiz) {
              const validpassword = await bcrypt.compare( body.password,quiz.password)
               if(validpassword){
                res.json({message: "valid user"})
               }
               else {
                res.json({message: "Invalid user"})
               }
           }
           else {
            res.send({message: "User doesn't exist"})
           }
     }
     catch(err) {
        res.send({message: err.message})
     }
})

module.exports= AdminRouter