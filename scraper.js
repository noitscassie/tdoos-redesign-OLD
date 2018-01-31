var cheerio = require('cheerio');

function scrapeWord(entry, json) {
  var word = entry.children('.title').text();
  json.word = word;
}

function scrapeDefinition(entry, json) {
  var definition = entry.children('.content').text();
  json.definition = definition;
}

function scrapeEntry(entry) {
  var json = { word : "", definition : "" };
  scrapeWord(entry, json);
  scrapeDefinition(entry, json);
  return json
}

module.exports.scrapeWord = scrapeWord;
module.exports.scrapeDefinition = scrapeDefinition;
module.exports.scrapeEntry = scrapeEntry;
