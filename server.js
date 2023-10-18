const express = require("express");
const app = express()
const collection = require("./mongodb")
const path = require('path');
const ejs = require('ejs')
const tempelatePath= path.join(__dirname,"../tempelates") 


app.use(express.json())
app.set("views", tempelatePath)
app.set('view engine', 'ejs');
app.use('/signup', express.static(path.join(__dirname, 'static')))
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
    res.render("index");
})
app.get('/login', (req, res) => {
    res.render(__dirname + "/login.ejs");
})


app.get('/signup', (req, res) => {
    res.render(__dirname + "/signup.ejs");
})


app.post("/signup", async(req,res) =>{

    const data = {
        fullname: req.body.fullname,
        password: req.body.password
    }

    await collection.insertMany([data])

    res.render("done")
     
})


app.listen(8080,()=>{
    console.log("Port connected successfully");
})