var express = require('express');
var app = express();
var path=require('path')
app.use(express.static('public'));


app.get('/1', function(req, res){
    res.sendFile('1.html',{root:path.join(__dirname,'./web')})
});
app.get('/2', function(req, res){
    res.sendFile('2.html',{root:path.join(__dirname,'./web')})
});
app.get('/3', function(req, res){
    res.sendFile('3.html',{root:path.join(__dirname,'./web')})
});
app.get('/4', function(req, res){
    res.sendFile('4.html',{root:path.join(__dirname,'./web')})
});
app.get('/5', function(req, res){
    res.sendFile('5.html',{root:path.join(__dirname,'./web')})
});
app.get('/6', function(req, res){
    res.sendFile('6.html',{root:path.join(__dirname,'./web')})
});
app.get('/7', function(req, res){
    res.sendFile('7.html',{root:path.join(__dirname,'./web')})
});

app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});