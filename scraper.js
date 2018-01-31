var cheerio = require('cheerio');

function getWord(entry, json) {
  var word = entry.children('.title').text();
  json.word = word;
}

function getDefinition(entry, json) {
  var definition = entry.children('.content').text();
  json.definition = definition;
}

function scrape(entry) {
  var json = { word : "", definition : "" };
  getWord(entry, json);
  getDefinition(entry, json);
  return json
}

module.exports.scrape = scrape;
