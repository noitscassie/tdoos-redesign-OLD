var cheerio = require('cheerio');
var fs = require('fs');

function getWord($, json) {
  $('.post.text > .title').filter(function() {
    var data = $(this);
    entry = data.text();
    json.entry = entry;
  });
};

function getDefinition($, json) {
  $('.post.text > .content').filter(function() {
    var data = $(this);
    definition = data.text();
    json.definition = definition;
  });
};

module.exports.getWord = getWord;
module.exports.getDefinition = getDefinition;
