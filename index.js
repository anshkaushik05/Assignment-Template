const express=require("express");
const app=express();
const path=require("path");
// const axios=require("axios");
const bodyparser = require('body-parser')
const bodyjson= bodyparser.json();
app.use(bodyjson);
app.use("/static",express.static("static"));

app.set('view engine','pug');
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.status(200).render("index.pug");
})

app.get("/details",(req,res)=>{
    res.status(200).render("personal_details.pug");
})

app.get("/assignment",(req,res)=>{
    res.status(200).render("assignment_details.pug");
})
app.get("/sign_up",(req,res)=>{
    res.status(200).render("sign_in.pug");
})


var bodydetails;
app.post("/details",(req,res)=>{
    // let {clg_name}=req.body;
    // var body=JSON.parse(req.body);
    bodydetails=req.body;
    // console.log(req.body);
    // res.render("demo",req.body);
    // var project_name= detailsbody.project_name;
    // var full_name=detailsbody.full_name;
    // var clg_name=detailsbody.clg_name;
    // var i=detailsbody.i;
    // var desc=detailsbody.desc;
    // res.json(JSON.stringify(req.body));
    res.status(200).redirect("/assignment");
})
var assignmentbody;

app.post("/assignment",(req,res)=>{
    assignmentbody=req.body;
    // console.log(assignmentbody);

    res.status(200).render("demo",{assignmentbody})
})


app.get("/assignmentready",(req,res)=>{
    var details={
        project_name: bodydetails.project_name,
        full_name: bodydetails.full_name,
        clg_name: bodydetails.clg_name,
        desc: bodydetails.desc,
        content: assignmentbody
    }
    // console.log(details);
    res.status(200).render("demo",details);
})
const port=80;

app.listen(port,()=>{
    console.log(`successfully hosted at http://localhost:${port}/`);
})