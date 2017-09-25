// Prerequisites
// npm install express connect

var http = require("http");
var fs = require('fs');
var connect = require('connect');
var express = require('express');


var app = express();

// Set content type and CORS headers for all requests.
app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  next();
});

//Send response with the JSON message
app.get('/', function (req, res) {
  res.send(JSON.stringify({ message: "Hello my love!" }));
});

var server = app.listen(8081, function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log('Server "api" running at http://127.0.0.1:8081/');
    });



