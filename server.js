'use strict';

var express = require('express');
var request = require('request');
var scraper = require('./scraper');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();

// require('scraper.js');

app.get('/scrape', function(req, res) {

  var url = 'http://www.dictionaryofobscuresorrows.com/page/10';

  request(url, function(error, response, html) {
    if(!error) {
      var $ = cheerio.load(html)
      var entry, definition;
      var json = { entry : "", definition : "" };

      function getDefinition() {
        $('.post.text > .content').filter(function() {
          var data = $(this);
          definition = data.text();
          json.definition = definition;
        });
      };

      function getEntry(word, definition) {
        word($, json);
        definition();
      }

      getEntry(scraper.getWord, getDefinition);


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
