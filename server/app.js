const express = require("express");
var fs = require('fs');
var datafile = 'server/data/festival.json';
const app = express();
var request = require('request');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS"
  );
  next();
});

app.get("/api/v1/festivals", (req, res, next) => {

  request({
    uri: 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals',
   
  }).pipe(res);

// const data = fs.readFileSync(datafile, 'utf8');
//   res.status(200).json(JSON.parse(data));
});

module.exports = app;
