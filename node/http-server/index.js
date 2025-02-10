const express = require("express")
const port = 3000;
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.post("/backend-api/conversation", (req,res)=>{
    res.send('Hello World from post')
})

app.listen(port, ()=>{
    console.log("Server is running at "+ port)
})