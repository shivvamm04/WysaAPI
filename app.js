const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.post("/",(req,res)=>{
    console.log("Got body :",req.body);
    res.send("Recieved")
})

app.get("*",(req,res)=>{
    res.send("404");
})

app.listen(8000);