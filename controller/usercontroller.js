

let service=require('../service/userService.js');


class Usercontrol{
    
    async Register(req, res) {
      
        await service.registerService(req.body).then((result) => {
            console.log(result,"result");
             res.status(200).json( result )
        }).catch((err => {          
            return res.status(400).send(err);
        }))
    }
    async loginUser(req,res){
        console.log(req.body);
        await service.loginService(req.body).then((result) => {
            res.status(200).json(result )
        }).catch((err => {
            return res.status(400).send(err);
        }))
    }

}
module.exports=new Usercontrol();