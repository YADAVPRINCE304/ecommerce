/**
 * This will be the starting file of the project
 */
const express = require("express")
const mongoose = require("mongoose")
const app=express()
const server_config = require("./configs/server.configs")
const db_config = require("./configs/db.configs")
const user_model =require("./models/user.model")
const bcrypt = require("bcryptjs")
app.use(express.json())
/**
 * Create the admin user at the starting of the application
 */

// Connection with the monogodb
mongoose.connect(db_config.DB_URL)

const db = mongoose.connection

db.on("error", ()=>{
    console.log("Error while connecting to the mongoDB")
})

db.once("open", ()=>{
   console.log("Connection to the mongodb")
   init()
})

async function init(){
    try{
        let user = await user_model.findOne({userId :"admin"})
        if(user){
            console.log("Admin is already present")
            return
        }  

    }catch(err){
        console.log("Error while reading the data",err)
    }

   

try{

    user = await user_model.create({

        name:"Prince",
        userId :"admin",
        email:"prince304@gmail.com",
        userType :"ADMIN",
        password: bcrypt.hashSync("Priyansh",8)
    })
    console.log("Admin created ", user)
        
}

  catch(err){
    console.log("Error while creat admin", err)
  }
}

/**
 * Stict the route to the server
 */
require("./routers/auth.routes")(app)




/**
 * Start the server
 */

app.listen(server_config.PORT , ()=>{
    console.log("Server started at port num:",server_config.PORT)
})