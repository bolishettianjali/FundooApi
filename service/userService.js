// const {response}=require('express');

const model=require('../model/usermodel');
const userModel=new model.UserModel();
const newModel=model.User;
const bcrypt=require('bcryptjs');
var jwt = require('jsonwebtoken');
//const UserModel=new model.UserModel();
const newmodel=model.User;

class userService{
async registerService(req,res){
// finduser in email
let foundUser = await userModel.findUser(req); 
        console.log(foundUser,"service");
        if (!foundUser.data) {
            const passwordHash = await bcrypt.hash(req.password, 10)
            var newUser = new newModel({
                firstname: req.firstname,
                lastname: req.lastname,
                email: req.email,
                password: passwordHash
            })
            let saveData = userModel.registerModel(newUser);

            return saveData;
        }
        else
        {
            console.log("fnd" ,foundUser);
            return foundUser;
        }
}
async loginService(req){
    let findUser = await userModel.findUser({email:req.email});
   
    if (findUser.data.length>0) {
    
        let passwordVerify = await bcrypt.compare(req.password, findUser.data[0].password)
       
        if (passwordVerify) {
            
            var userid ={
                email: findUser.data[0].email,
                id:findUser.data[0]._id
            }
            var token= jwt.sign(userid,"Anjali")
            console.log(token, "token");
            return{

                
                    message: "Login success",
                    data: {
                        firstname: findUser.data[0].firstname,
                        lastname: findUser.data[0].lastname,
                        email: findUser.data[0].email,
                        createdAt: findUser.data[0].createdAt,
                        token: token,
                        status:200
                    },
                    
                    success: "",
                    status: 200
                    }
                }
            
                
                    
                

            
            }
        else{
                return ({
                    statusCode: 400,
                    name: "Error",
                    message: "invalid password",
                    code: "LOGIN_FAILED"
                })
            }

            


     return findUser;
}
}

module.exports=new userService();


