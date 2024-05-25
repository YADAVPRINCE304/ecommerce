const mongoose = require("mongoose")
/**
 * name
 * user Id
 * password
 * email
 * userType
 */

const userSchema = new mongoose.Schema({

name:{
    type: String,
    required :true
},
userId:{
    type : String,
    required :true, 
    unique :true
},
password:{
    type: String,
    required : true
},
email :{
    type :String,
    required : true,
    lowercase : true,
    minLength :10,
    unique : true
},
userType:{
    type :String,
    required : true,
    default : "Customer",
    enum :["CUSTOMER","ADMIN"]
}



},{timestamps : true,versionKey:false})

module.exports =mongoose.model("User",userSchema)