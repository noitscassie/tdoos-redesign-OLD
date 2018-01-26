'use strict';

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();

app.get('/scrape', function(req, res) {

  var url = 'http://www.dictionaryofobscuresorrows.com/page/10';

  request(url, function(error, response, html) {
    if(!error) {
      var $ = cheerio.load(html)
      var entry, definition;
      var json = { entry : "", definition : "" };

      $('#wrapper > #page > #pageInner > .post.text > .title').filter(function() {
        var data = $(this);
        entry = data.text();
        json.entry = entry;
      });

      $('#wrapper > #page > #pageInner > .post.text > .content').filter(function() {
        var data = $(this);
        definition = data.text();
        json.definition = definition;
      });
    };
    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {
      console.log('File successfully written!');
    });
  });


  res.send('Check your console!');
});

app.listen('8000');
console.log('Some pretty wizard stuff, eh?');
exports = module.exports = app;
