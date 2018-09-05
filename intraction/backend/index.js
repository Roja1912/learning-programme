const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
app.use(express.json());
const cors=require('cors')
app.use(cors());
  

mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true }, (err)=>{
    if(err){
        console.log('error');
    }else{
        console.log('successfully connected');
    }
    
    
});

const user=require('./router/router');
app.use('/users',user)



app.get('/',(req,res)=>{
    res.send("welcome to node");
});



PORT=process.env.PORT;

app.listen(PORT,() =>
console.log(`AT ${PORT} PORT is running`)
);
