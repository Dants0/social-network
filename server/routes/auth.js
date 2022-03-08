const router = require("express").Router();
// const cookies = require("cookie-session");
const passport = require("passport");

const Client_URL= "http://localhost:3000/";

router.get("/login/sucess",(req,res)=>{
    if(req.user){
        res.status(200).json({
            sucess:true,
            message:"connected",
            user:req.user,
            // cookies:req.cookies
        })
    }
});

