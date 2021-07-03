require('dotenv').config()

const express = require('express')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'./dist')))

app.get("/",(req,res)=>{
    res.status(200).sendFile(__dirname + '/dist/app.html')
})

app.get("/test",(req,res)=>{
    res.status(200).send("Welcome to test page")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening at : ${process.env.PORT}`)
});



