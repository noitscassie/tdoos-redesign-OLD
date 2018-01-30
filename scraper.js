var cheerio = require('cheerio');
var fs = require('fs');

function getWord($, json) {
  $('.post.text > .title').filter(function() {
    var data = $(this);
    word = data.text();
    json.word = word;
  });
};

function getDefinition($, json) {
  $('.post.text > .content').filter(function() {
    var data = $(this);
    definition = data.text();
    json.definition = definition;
  });
};

function getEntry($, word, definition) {
  var json = { word : "", definition : "" };
  word($, json);
  definition($, json);
  return json;
}

module.exports.getWord = getWord;
module.exports.getDefinition = getDefinition;
module.exports.getEntry = getEntry;
