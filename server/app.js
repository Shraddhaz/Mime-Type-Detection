// Importing modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var extToMimeMap = require('./mime-types');

// Setting up Access-Control for server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

/* Handling POST request to root to fetch the MIME type
    The request contains the file name. We isolate the file extension from the file name
    and get the MIME type from the FileExtension => MimeType mapping 
    created in mime-types.js  */
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

// Creating server that listens for connection on port 8080
app.listen(8080, function () {
    console.log("Server running on:", 8080);
});