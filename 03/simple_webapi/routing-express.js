const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

//step2 using obj express's methods
app.get('/',(req,res)=>{
    res.send('Home page');
});
app.get('/',(req,res)=>{
    res.send('Product page');
});
app.get('/api/user',(req, res)=>{
    const userData = {id:15,name:'Suchada'};
    res.send(userData);
});
//step3 listen
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
    });