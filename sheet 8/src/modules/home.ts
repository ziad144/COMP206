import { Request,Response } from "express";
import path from "path"
let viewspath=path.join(__dirname,"../","views")
export function get_home(req:Request,res:Response){
    res.sendFile(`${viewspath}/home.html`)
}