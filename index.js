var express = require('express');
var app = express();
var path=require('path')
app.use(express.static('public'));
app.get('/', function(req, res){
    res.sendFile('plus.html',{root:path.join(__dirname,'./web')})
});
app.get('/1', function(req, res){
    res.sendFile('budongsan.html',{root:path.join(__dirname,'./web')})
});
app.get('/2', function(req, res){
    res.sendFile('chaegwon.html',{root:path.join(__dirname,'./web')})
});
app.get('/3', function(req, res){
    res.sendFile('dankikeumyung.html',{root:path.join(__dirname,'./web')})
});
app.get('/4', function(req, res){
    res.sendFile('Gongmobudongsan.html',{root:path.join(__dirname,'./web')})
});
app.get('/5', function(req, res){
    res.sendFile('Gongmotjasan.html',{root:path.join(__dirname,'./web')})
});
app.get('/6', function(req, res){
    res.sendFile('honhabchaegwon.html',{root:path.join(__dirname,'./web')})
});
app.get('/7', function(req, res){
    res.sendFile('honhapjoosick.html',{root:path.join(__dirname,'./web')})
});
app.get('/8', function(req, res){
    res.sendFile('jaeganjeop.html',{root:path.join(__dirname,'./web')})
});
app.get('/9', function(req, res){
    res.sendFile('joosick.html',{root:path.join(__dirname,'./web')})
});
app.get('/10', function(req, res){
    res.sendFile('pasanghyung.html',{root:path.join(__dirname,'./web')})
});
app.get('/11', function(req, res){
    res.sendFile('tjasan.html',{root:path.join(__dirname,'./web')})
});

app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});