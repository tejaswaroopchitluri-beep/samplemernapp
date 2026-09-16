let express=require('express');
let app=express();
let hrroutes=require('./routes/hr_route');

app.use("/api/hr",hrroutes);

//run the server
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});