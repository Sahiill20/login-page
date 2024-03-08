const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require("body-parser")
const Login = require("./models/login");
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI);
  

app.post("/",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const registered = new Login({ email: email, password: password });
    const zhala = await registered.save();
    res.redirect("/thank");
})

app.get("/thank",(req,res)=>{
    res.send("thank you for logging ");
});



app.listen(3000,function(){
    console.log("server is good better best");
})