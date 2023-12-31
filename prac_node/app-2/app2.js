const express = require('express');
const { ChildProcess } = require('child_process');
const path = require('path');

const app = express();

app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.listen(8090,()=>{console.log("server started and listening at port 8090")});

console.log(path.resolve(__dirname, 'index.html'));