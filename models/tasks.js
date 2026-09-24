let mongoose=require('mongoose');
let taskSchema =mongoose.Schema({
    taskname:{
        type:String,
        required:true
    },
    taskdesc:{
        type:String,
        required:true
},
assignedto:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:true
},
assignedby:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:true
},
duedate:{
    type:Date,
    required:true
},
status:{
    type:String,
    enum:['pending','inprogress','completed'],
    default:'pending'}
},{timestamps:true
});
const tasks=mongoose.model('tasks',taskSchema);
module.exports={tasks}