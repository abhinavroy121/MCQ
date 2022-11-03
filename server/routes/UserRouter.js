const { Router } = require("express");
const UserModel = require("../model/User");
const bcrypt = require('bcrypt')
const userRouter = Router();

userRouter.get("/", async (req, res) => {
  res.send("admin page");
});

//////////////////////// create a new user ----------- 

userRouter.post("/create", async (req, res) => {
  const {name,email,password} = req.body
   if(!name || !email || !password){
    res.send({message: "Please enter the required credentials"})
   }
  const user = await new UserModel({name,email,password});
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
    user.save((err, success) => {
      if (err) return res.send(err, "error while adding");
      return res.send(success);
    });
  } catch (err) {
    res.send({message: err.message})
  }
});


 /////////////////////  user login ----------------
userRouter.post("/login", async (req, res) => {
  const {password,email} = req.body;
  if(!password || !email) {
       return res.status(403).send("Enter valid username or password")
  } 
   
   try{
    const body = req.body;
   let user = await UserModel.findOne({email:body.email})
   console.log(user)
         if(user) {
            const validpassword = await bcrypt.compare( body.password,user.password)
             if(validpassword){
             return res.json({message: "valid user",id:user.id})
             }
             else {
            return  res.json({message: "Invalid user"})
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


///////////  user details ----------



module.exports = userRouter;
