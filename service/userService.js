// const {response}=require('express');

const model=require('../model/usermodel');
const userModel=new model.UserModel();
const newModel=model.User;
const bcrypt=require('bcryptjs');
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
    console.log(findUser.data.length,"value")
    if (findUser.data.length>0) {
        console.log("inside iff",req.password,findUser.data[0].password);
        let passwordVerify = await bcrypt.compare(req.password, findUser.data[0].password)
        console.log(passwordVerify,"verification");
        if (passwordVerify) {
           
            return{

                
                    message: "Login success",
                
                       
                        firstname: findUser.data.firstname,
                        lastname: findUser.data.lastname,
                        email: findUser.data.email,
                        createdAt: findUser.data.createdAt,
                    
                    
                    success: "",
                    status: 200
                    }
                }

            
            }
        else 
            return new Promise((resolve, reject) => { 
                reject({
                    statusCode: 400,
                    name: "Error",
                    message: "invalid password",
                    code: "LOGIN_FAILED"
                })

            })


     return findUser;
}
}

module.exports=new userService();


