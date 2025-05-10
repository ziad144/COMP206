import { Router } from "express";
import { get_logout, post_logout } from "../modules/logout";

export let logout=Router() 

logout.get("/",get_logout)
logout.post("/",post_logout)