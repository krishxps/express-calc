const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req , res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req , res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2); 
    var result = num1 + num2 ;
    res.send("Done sir: "+ result);
    console.log(req.body);
});

app.get("/bmicalculator",function(req , res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator",function(req ,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.Height);
    var result = weight / (height * height) ;
    res.send("Done sir: "+ result);
});

app.listen(3000,function(){
    console.log("Listening To port 3000")
});