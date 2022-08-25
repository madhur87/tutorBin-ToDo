const express = require('express');
const app = express();
const dotenv = require('dotenv')
const PORT = 3000 || process.env.PORT;
const routesAuth = require('./routes/auth');
const mongoDB = require('./helpers/dbConnection');

//Call ENV File
dotenv.config();

// DB Function Call
mongoDB();

//Body Parser
app.use(express.json());

//Call Routes
app.use('/api', routesAuth)

//Create Server
app.listen(PORT, (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log(`PORT is running on ${PORT}`);
})