import { check }  from "express-validator"
export const uservalid=()=>{
    return[
        check("name").notEmpty().withMessage("reqired").isLength({min:4,max:20}).withMessage("should be betwen 4 : 20"),
        check("email").isEmail().withMessage("shold be email")
    ]
}