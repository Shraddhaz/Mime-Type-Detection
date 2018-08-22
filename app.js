var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var extToMimeMap = require('./mime-types');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.post('/', function(req,res) {
    res.writeHead(200, { 'Content-Type' : 'application/json' });
    const fileNameArr = req.body.name.split('.');
    const fileExtension = fileNameArr[fileNameArr.length-1];
    const mimeType = extToMimeMap[fileExtension.toLowerCase()];
    if(mimeType)
        res.end(mimeType);
    else
        res.end(Error('File extension not found in map'));
});

app.listen(8080, function () {
    console.log("Server running on:", 8080);
});