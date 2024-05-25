/**
 * POST localhost:8888/ecomm/api/v1/auth/signup
 * 
 * I need th intercept this 
 */
const authController = require("../contollers/auth.controller")

module.exports=(app)=>{
    app.post("/ecomm/api/v1/auth/signup",authController.signup)
}