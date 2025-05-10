import { Request,Response } from "express";
import path from "path"
import fs from "fs/promises"
import { USER } from "../types/user";

let viewspath=path.join(__dirname,"../","views")
let datapath =path.join(__dirname,"../","data","users.json")

export function get_login(req:Request,res:Response){
    res.sendFile(`${viewspath}/login.html`)
}

export async function post_login(req:Request,res:Response){
    try{
        let users:USER[] = JSON.parse(await fs.readFile(datapath,"utf-8"))
        let {email ,password}=req.body;
        let userindex=users.findIndex(u=>u.email==email)
        if(userindex==-1)
        {
            res.send("user not found")
            return;
        }
        else{
            if(password==users[userindex].password)
            {
                req.session.name=users[userindex].name
                req.session.email=users[userindex].email
                res.redirect("/")
            }
            else{
                res.send("password is wrong");
                return;
            }
        }
    }
    catch
    {
        console.error("error")
    }
}