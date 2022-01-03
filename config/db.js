
const mongoose=require('mongoose')

const db=()=>{
mongoose.connect('mongodb://127.0.0.1:27017/testingdb', (err)=>{
        if(err){
          console.log("db erorr",err)
        }
        else{
          console.log("db connected succesfuly")
        }
    });
}
module.exports={db};