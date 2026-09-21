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
router.delete("/deleteEmployee/:id",async (req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id);
    if(result){
        res.send({result:"Employee deleted successfully"});
    }   
    else{
        res.send({result:"Employee not found"});
    }      
 
})
module.exports=router;