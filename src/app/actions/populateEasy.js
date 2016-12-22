const request = require('request-promise');
const cheerio = require('cheerio');
const Entities = require('html-entities').AllHtmlEntities;
const jsonfile = require('jsonfile');
entities = new Entities();

const easySource = 'https://en.wikipedia.org/wiki/List_of_cities_by_GDP';

const easyCityLocation = '../../assets/easyCity.json'

request(easySource)
.then((responseHTML) => {
  const $ = cheerio.load(responseHTML);
  const easyList = [];
  $('td:first-child').each((index, element) => {
    easyList.push(entities.decode($(element).text()));
  })
  return easyList;
})
.then(easyList => {
  jsonfile.writeFile(easyCityLocation, easyList, (err) => {
    console.warn(err)
  })
})
