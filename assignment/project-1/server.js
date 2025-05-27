const express=require("express")
const server=express()

server.use(express.json())

server.get("/",(req,resp)=>{
    resp.send("Hello")
});


server.listen(3000,()=>{
    console.log("Server is running in port 3000;")
});


