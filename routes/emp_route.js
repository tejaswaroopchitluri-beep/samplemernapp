let express=require('express');
let router=express.Router();
let bycrypt=require('bcrypt');
let {users}=require('../models/users');

router.post("/register",async (req,res)=>{
    console.log(req.body);
    req.body.password=await bycrypt.hash(req.body.password,10);
    let newuser=new users(req.body);
    let result=await newuser.save();
    res.send(result);
    
})
router.post("/login",async (req,res)=>{
    let result=await users.findOne({email:req.body.email});
    if(result){
        let matchpass=await bycrypt.compare(req.body.password,result.password);
        if(matchpass){
            res.send("login successful");
        }else{
            res.send("login failed");
        }       
    }else{
        res.send({result:"No user found"})
    }

})
router.get("/viewtask",async (req,res)=>{
    res.send('view task page called');
})
router.put("/updatestatus",async (req,res)=>{
    res.send('update status page called');
})
module.exports=router;