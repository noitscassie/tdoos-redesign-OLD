var cheerio = require('cheerio');
var fs = require('fs');

function getWord($, json) {
  $('.post.text > title').filter(function() {
    var data = $(this);
    entry = data.text();
    json.entry = entry;
  });
}

module.exports.getWord = getWord;
