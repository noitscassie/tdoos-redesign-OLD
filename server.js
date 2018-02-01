'use strict';

var express = require('express');
var request = require('request');
var scraper = require('./scraper');
var cheerio = require('cheerio');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var dburl = "mongodb://localhost:27017/obscure_sorrows";

const TOTAL_PAGES = 17;

app.get('/scrape', function(req, res) {
  for (var page = 1; page <= TOTAL_PAGES; page ++) {
    var url = 'http://www.dictionaryofobscuresorrows.com/page/' + page;
    request(url, function(error, response, html) {
      if(!error) {
        var $ = cheerio.load(html);
        var entries = []
        $('.post.text').each(function() {
          var entry = $(this);
          if (entry.children().length == 4) {
            entries.push(scraper.scrape(entry));
            MongoClient.connect(dburl, function(err, db) {
              if (err) throw err;
              db.close();
            });
          };
        });
      };
    });
  }
  res.send('Check your console!');
});

app.listen('8000');
console.log('Some pretty wizard stuff, eh?');
exports = module.exports = app;
