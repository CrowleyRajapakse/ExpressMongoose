/**
 * Created by Sampath Rajapakse on 5/1/2017.
 */

const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('listening on 3000');
});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

