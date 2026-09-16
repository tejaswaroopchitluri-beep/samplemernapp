let express=require('express');
let router=express.Router();

router.post("/register",(req,res)=>{
    res.send('register employee route called');
})

router.post("/login",(req,res)=>{
    res.send('login employee route called');
})
router.get("/viewtasks",(req,res)=>{
    res.send('view tasks route called');
})
router.put("/updatestatus",(req,res)=>{
    res.send('update status route called');
})
module.exports=router;