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
  res.send(JSON.stringify({ message: "Hello Team 1!" }));
});

app.get('/country-by-address', function (reqIn, resIn) {
  var address = reqIn.query.query

  var reqOut = require("request");

  //AIzaSyAMmXpXOpEMQ0DLPtbEqkc6pncFMOKAuuA
  reqOut.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAMmXpXOpEMQ0DLPtbEqkc6pncFMOKAuuA", function (errOut, resOut, bodyOut) {
    var country;
    if (!errOut) {
        var resultsObj = JSON.parse(bodyOut);

        resultsObj.results[0].address_components.forEach(function(value){
          if (value.types.indexOf("country") > -1){
            country = value.short_name;
          }
        });
    }

    if (country != null) {
      resIn.send(JSON.stringify({ country: country }))
    } else {
      resIn.send(JSON.stringify({ error: "XYZ" }));
    }
  });

});

app.get('/health', function (req, res) {
  res.send(JSON.stringify({ message: "OK" }));
});

var server = app.listen(8081, function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log('Server "api" running at http://127.0.0.1:8081/');
    });
