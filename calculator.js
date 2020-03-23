const express = require('express');
const bodyParser = require('body-parser');

//setup a new app using express module
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    console.log(num1);
    console.log(num2);
    var result =  num1 + num2;
    res.send("The result of calculation is " + result);
    res.send("thanks for posting that");
})

app.listen("3000", function(){
  console.log('sever started at port 3000')
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname +  "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var bmi = weight / (height * height);

  res.send("Your BMI is " +  bmi);
})
