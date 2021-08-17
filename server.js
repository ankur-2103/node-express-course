const express = require('express');
const app = express();

const mockUserData=[
    {name:'Ankur'},
    {name:'Aarya'}
]

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', function(req, res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: req.params.id
    })
})

app.listen(8000,function(){
    console.log("server is running")
})
    