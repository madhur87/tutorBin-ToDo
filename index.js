const express = require('express');
const app = express();
const dotenv = require('dotenv')
const PORT = 3000 || process.env.PORT;

//Call ENV File
dotenv.config();

//Body Parser
app.use(express.json());

//Create Server
app.listen(PORT, (err)=>{
    if(err){
        throw new Error(err);
    }
    console.log(`PORT is running on ${PORT}`);
})