
//01 IMPORT (REQUIRE)
const express=require("express")
require("dotenv").config()


const cors = require('cors');



const connectDB = require ('./config/connectDB')

//02 INSTANCE OF EXPRESS
const app=express()

//MIDDLEWARE
app.use(cors({
    origin: 'https://Azuréa-Piscines.netlify.app'
  }));
app.use(express.json())

//05 CONNEC DB
connectDB()

//06 ROUTES
app.use("/api/auth", require('./routes/auth.route'));

//ROUTE MANIPULATION USERS PAR ADMIN
app.use("/api/user",require("./routes/user.route"))

//ROUTE MANIPULATION PISCINE
app.use('/api/piscines', require('./routes/piscine.route'));





//03 PORT
const PORT= process.env.PORT || 7500;

//LISTEN TO PORT
app.listen(PORT,(err)=>{
    err
    ?
    console.error(err):console.log(`The server is on the port: http://localhost:${PORT}`);
});

