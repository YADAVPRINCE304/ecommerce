/**
 * I need to write the controller /logic to register a user
 * 
 */
const bcrypt = require("bcryptjs")
const user_model = require("../models/user.model")
exports.signup = async (req, res)=>{
     /**
      * Logic to create the user
      */

     //1. Read the requst body

     const request_body=req.body;

     //2.Insert the data in the user collection in mongo Db
const userObj = {
    name : request_body.name,
    userId : request_body.userId,
    email : request_body.email,
    userType : request_body.userType,
   password : bcrypt.hashSync(request_body.password,8)
}
try{
   const user_created= await user_model.create(userObj)
/**
 * Return the user
 */
res.status(201).send(user_created)
}catch(err){
    console.log("Error while registering the user",err)
    res.status(500).send({
        message :"Some error happened while registring the"
    })
}

     //3. Reeturn the response to the user
}

