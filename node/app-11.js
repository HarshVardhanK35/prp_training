const express = require('express');
const app = express();

const PORT = 8092;

app.get('/', (req, res)=>{
    res.send("Welcome to Express");
});

app.listen(PORT, ()=>{
    console.log(`Server up and running at http://localhost:${PORT}`)
})