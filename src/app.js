const path = require("path");
const express = require('express');
const app = express()





const staticPath = path.join(__dirname, "../public");
console.log(staticPath);

app.use(express.static(staticPath));

app.get("/", (req,res)=> {
    res.render("index.html")
});

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public", "Contactus.html"));

});

app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public", "signup.html"));

});

app.get("/food",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public", "orderfood.html"));

});

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public", "error.html"));

});



app.listen(8000, ()=>{
    console.log("listing to port 8000")
});