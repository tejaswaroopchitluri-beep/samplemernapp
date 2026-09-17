let express=require('express');
let app=express();
let hrroutes=require('./routes/hr_route');
let emproutes=require('./routes/emp_route');
let mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/hrmanagement")
    .then(()=>{
        console.log('connected to  mongodb database');
    }).catch((err)=>{
        console.log('error connecting to database',err);
    });

app.use(express.json());
app.use("/api/hr",hrroutes);
app.use("/api/employee",emproutes);

//run the server
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});