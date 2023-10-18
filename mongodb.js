

const mongoose= require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/loginregisterdb',{
useNewUrlParser: true,
useUnifiedTopology: true
})




.then(()=>{
    console.log("mongo connected");
})
.catch((e)=>{
    console.log('error occured')
    console.log(e)
})

const LoginSchema = new mongoose.Schema({
    fullname:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true 
    }

})


const collection =new mongoose.model("Connection1", LoginSchema)


module.exports = collection 

