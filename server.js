"use strict";

var express = require('express');
var app = express();
var fs = require('fs');


// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = 'node-notification';

// Port where we'll run the websocket server
var webSocketsServerPort = 8080;

// websocket and http servers
var webSocketServer = require('websocket').server;
var http = require('https');


/**
 * Helper function for escaping input strings
 */
function htmlEntities(str) {
    return String(str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


//case you run let's encrypt add your ssl keys
var privateKey  = fs.readFileSync('PATH TO privkey', 'utf8');
var certificate = fs.readFileSync('PATH TO cert', 'utf8');
var ca = fs.readFileSync('PATH TO chain', 'utf8');

var credentials = {key: privateKey, cert: certificate, ca: ca};

//var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();


//pass in your express app and credentials to create an https server
var httpsServer = http.createServer(credentials, app);


httpsServer.listen(webSocketsServerPort, function () {
    console.log((new Date()) + " Server is listening on port "
        + webSocketsServerPort);
});


app.get('URL TO THE REST SERVICE / SERVICE URI', function (req, res) {
    console.log("you did it!");
    fs.readFile( __dirname + "/" + "test.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})
