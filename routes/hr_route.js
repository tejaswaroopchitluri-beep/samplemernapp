let express=require('express');
let router=express.Router();
let {users}=require('../models/users');
router.get("/viewempolyees",async (req,res)=>{
   let result=await users.find();
   res.send(result);
});
router.post("/assign-task",async (req,res)=>{
    let result=await users.findByIdAndUpdate(req.body.id,{$set:{task:req.body.task}});
    res.send(result);
})
router.get("/view-tasks",(req,res)=>{
    res.send('view tasks route called');
})
router.delete("/deleteEmployee",(req,res)=>{
    res.send('delete employee route called');
})
module.exports=router;