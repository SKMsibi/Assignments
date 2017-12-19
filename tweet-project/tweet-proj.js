"use strict";
const queryString = require('query-string');
const request = require("request");
const express = require("express");
var app = express();

app.get("/", function (req, res) {
    const url = "https://api.twitter.com/1.1/statuses/update.json";

    // const parsed = queryString.parse(req.query);

    var oauth = {
        consumer_key: "xtSkoYS1EdICn488D0k5w5rrN",
        consumer_secret: "27QiiOaQDueOERNiPX5ImDusAYAKWQqwW4wffpZL6Yz2Ramzg1",
        token: "940168325195280385-99ZNHBPGnlbPiG7gorqaUbV4DmRy9q0",
        token_secret: "NKCHDxXyeV5vVLcuEho9MLTeAY7usYZ4qKNGlPpBtZK67"
    };

    var statusUpdate = {
        url: url,
        oauth: oauth,
        qs: queryString.parse(req.query)
    };

    request.post(statusUpdate, function (err, httpsResponse, request) {
        console.log("error", err);
        console.log("httpsResponse", httpsResponse);
        console.log("request", request);
        if (err) {
            res.send(`<h1>error ${err}</h1>`);
        } else {
            console.log("httpsResponse", httpsResponse);
            console.log("request", request);
            // console.log(httpsResponse.query.end());
            res.send(`<h1>${httpsResponse}.</h1>`);
        }
    });
});
app.get('/tweet', (req, res) => res.send('<h1>stay rooted to your roots.</h1>'));

app.listen(3000, () => console.log('The server started correctly and is listening on port 3000!'))