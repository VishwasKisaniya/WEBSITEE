const express = require("express");
const app = express()
const collection = require("./mongodb")
const path = require('path');
const hbs = require('hbs')

const tempelatePath= path.join(__dirname,"../tempelates") 


app.use(express.json())
app.set("views", tempelatePath)
app.set('view engine', 'hbs');
//app.use('/signup', express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({extended:false }))

//app.use(express.static(path.resolve(__dirname, "public")))

/*
app.post('/signup', function(req,res){
    dbConn.then(function(db){
        delete req.body._id;
        db.collection.insertMany(req.body);
    });
    res.send('Data received: \n' + JSON.stringify(req.body));

})
*/


app.get('/', (req, res) => {
    res.render(__dirname + "/index.hbs");
})
app.get('/login', (req, res) => {
    res.render(__dirname + "/login.hbs");
})


app.get('/signup', (req, res) => {
    res.render(__dirname + "/signup.hbs");
})


app.post("/signup", async(req,res) =>{

    var data = {
        fullname: req.body.fullname,
        password: req.body.password
    }
    console.log("data accepted");

    await collection.insertOne(data)
    console.log("Inserted data somehow");
    res.render(__dirname + "/done.hbs")
     console.log("HBFS");
})


app.listen(3000,()=>{
    console.log("Port connected successfully");
})