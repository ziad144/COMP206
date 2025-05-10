import express from "express";
import { home } from "./routs/home";
import { register } from "./routs/register";
import { login } from "./routs/login";
import session from "express-session";
import { USER } from "./types/user";
import { logout } from "./routs/logout";
import fs from "fs/promises"


let app=express()
app.use(express.urlencoded())
app.use(express.json())
app.use(session({
    secret:"ziad",
    resave:false,
    saveUninitialized:false
}))

declare module "express-session"{
    interface SessionData{
        name:string,
        email:string
    }
}


app.use("/",home)
app.use("/register",register)
app.use("/login",login)
app.use("/logout",logout)


app.get('/session',(req,res)=>{
    if(req.session.name)
        res.json({
        name:req.session.name,
        email:req.session.email
    })
    else
        res.json({name:null})
})

app.get("/user/:id",async(req,res)=>{
    let users:USER[] =JSON.parse(await(fs.readFile("./src/data/users.json","utf8")))
    let id:number=+req.params.id;
    console.log(+req.params.id)
    res.json(users[id])
})

app.listen(3000,()=>{
    console.log("server is run");
    
})
