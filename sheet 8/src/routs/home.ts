import { Router } from "express";
import { get_home } from "../modules/home";

export let home=Router()
home.get("/",get_home)