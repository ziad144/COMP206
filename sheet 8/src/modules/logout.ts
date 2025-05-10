import { Request,Response } from "express";
import path from "path"
let viewspath=path.join(__dirname,"../","views")

export function get_logout(req:Request,res:Response){
    res.sendFile(`${viewspath}/logout.html`)
}
export function post_logout(req:Request,res:Response){
    req.session.destroy(()=>{
        res.redirect("/")
    })
}