const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
}, {
    timestamps: true
})

const User = mongoose.model('testdb', UserSchema);
class UserModel {
    findUser(req) {
        var response = {
            message: "",
            data: "",
            success: "",
            status: 200
        };
        return new Promise((resolve, reject) => {
            User.find({ email: req.email })
                .then((data) => {
                   
                    if (data.length>0) {
                        (response.success = true),
                            (response.data = data),
                            (response.status = 422),
                            (response.message = "user already exists");
                        resolve(response);
                    }

                    else {
                        // resolve but u rejected 
                        resolve({
                            message: "user not found please register first",
                            data: null
                        });
                    }
                })
                .catch((err) => {

                    reject(
                        { success: false, error: err }
                    );
                });
        });
    }
    registerModel(obj) {
        var response = {
            sucess: true,
            message: '',
            data: ''
        }
        return new Promise((reslove, reject) => {
            obj.save()
                .then((data) => {
                    response.sucess = true,
                        response.message = "Registred success",
                        response.data = data;
                    reslove({ response });

                })
                .catch((err) => {
                    response.sucess = false,
                        response.message = "Registred failed",
                        response.data = "";
                    reject({ response });
                })
        })
    }
}


module.exports = { User, UserModel };