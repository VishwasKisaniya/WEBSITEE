

const mongoose= require("mongoose")

mongoose.connect('mongodb://localhost:27017/loginregisterdb')




.then(()=>{
    console.log("mongo connected");
})
.catch((e)=>{
    console.log('error occured')
    console.log(e)
})

const SignupSchema = new mongoose.Schema({
    fullname:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : Number,
        required : true 
    }

})


const collection =new mongoose.model("SignupConnection", SignupSchema)


module.exports = collection 

