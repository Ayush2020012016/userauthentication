const express = require('express')
const app = express();
const cors = require('cors');
const jwt = require("jsonwebtoken");
 require('dotenv').config()
const publickey = process.env.USERFRONT_PUBLIC_KEY
const Userfront =require("@userfront/react");
Userfront.init("vnd7wq9b");

app.use(cors());

app.get('/',(req,res)=>{
    res.send("welcome to the server")
})

//Middleware function.
function authenticateToken(req, res, next) {
    // Read the JWT access token from the request header
    const authHeader = req.headers["authorization"];
    console.log("authHeader are " + authHeader)
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401); // Return 401 if no token
    
    // Verify the token using the Userfront public key
    jwt.verify(token, publickey, (err, auth) => {
        console.log("env variable")
        if (err) 
        {
            console.log("this is error"+err)
            req.auth = auth
            return res.sendStatus(403); }//  403 if there is an error verifying
            req.auth = auth;
            console.log("done it")
    next(); 
  });
}

app.get('/content',authenticateToken,(req,res)=>{
    // console.log(req.headers["authorization"])
    console.log(req.auth)

    if(req.auth)
    return res.send(req.auth)
   return res.send({data:"data is not available right now."})
})

app.listen(4002,()=>{
    console.log("server started at port 4002 ")
})