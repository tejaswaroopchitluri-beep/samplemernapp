let express=require('express');
let router=express.Router();

router.get("/viewempolyees",(req,res)=>{
    res.send('view empolyees route called');
})
router.post("/assign-task",(req,res)=>{
    res.send('assign task route called');
})
router.get("/view-tasks",(req,res)=>{
    res.send('view tasks route called');
})
router.delete("/deleteEmployee",(req,res)=>{
    res.send('delete employee route called');
})
module.exports=router;
