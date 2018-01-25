'use strict';

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();

app.get('/scrape', function(req, res) {

  url = 'http://www.dictionaryofobscuresorrows.com/page/2';

  request(url, function(error, response, html) {
    if(!error) {
      var $ = cheerio.load(html)
      var entry, definition;
      var json = { entry : "", definition : "" };

      $('.post.text.title').filter(function() {
        var data = $(this);
        entry = data.text();
        console.log(definition);
      });

      $('.post.text.content').filter(function() {
        var data = $(this);
        definition = data.text();
        console.log(definition);
      });
    };
  });

});

app.listen('8000');
console.log('Some pretty wizard stuff, eh?');
exports = module.exports = app;
