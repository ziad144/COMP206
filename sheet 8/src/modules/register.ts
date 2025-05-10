import { Request,Response } from "express";
import path from "path"
import fs from "fs/promises"
import { USER } from "../types/user";
import { validationResult } from "express-validator";

let viewspath=path.join(__dirname,"../","views")
let datapath =path.join(__dirname,"../","data","users.json")

export function get_register(req:Request,res:Response){
    res.sendFile(`${viewspath}/register.html`)
}

export async function post_register(req:Request,res:Response){
    try{

        let data:USER[]=JSON.parse((await fs.readFile(datapath,'utf8')))
        let user :USER=req.body
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json(errors.array());
            return;
        }
        else{
            data.push(user)
            await fs.writeFile(datapath,JSON.stringify(data,null,2))
            res.redirect("/login")
            return;
        }
    }
        catch (error){
            console.error("Error processing user registration:", error);
            res.status(500).json({ error: "Failed to register user." });
        }

}