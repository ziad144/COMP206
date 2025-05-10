import { Router } from "express";
import { get_register, post_register } from "../modules/register";
import { uservalid } from "../midelware/uservalid";

export let register=Router()
register.get("/",get_register)
register.post("/",uservalid(),post_register)