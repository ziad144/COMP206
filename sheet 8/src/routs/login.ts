import { Router } from "express";
import { get_login, post_login } from "../modules/login";


export let login=Router()
login.get("/",get_login)
login.post("/",post_login)