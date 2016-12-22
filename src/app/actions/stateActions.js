import {MAX_HINT, MAX_QUESTION} from '../main.js';
import update from 'immutability-helper';
import parseWikiResponse from './parser.js';
// import parseWikiLocation from './parseLocation.js';
const Promise = require('bluebird');

export function setPlayerAnswerCoords(coordinates) {
  this.setState({
    data: update(this.state.data, {playerAnswer: {$set: coordinates}})
  });
}

export function addHint() {
  console.log('Adding a new Hint');
  console.log(this.state.data);
  if (this.state.data.hintCount >= MAX_HINT) {
    console.warn('Number of hints already at maximum');
    return;
  }
  this.setState({
    data: update(this.state.data, {hintCount: {$set: this.state.data.hintCount + 1}})
  });
}

export function newQuestion(difficulty = 'easy') {
  console.log('fetching new questions');
  let answerLocation;
  let city;
  if (this.state.data.questionCount >= MAX_QUESTION) {
    return;
  }

  return randomCity(difficulty)
    .then(cityName => {
      city = cityName;
      return;
    })
    .then(() => {
      return googleLocation(city);
    })
    .then(locationResponseObj => {
      answerLocation = locationResponseObj;
      return;
    })
    .then(() => {
      return wikiTextFetch(city);
    })
    .then(responseObj => {
      console.log(responseObj.query);
      return parseWikiResponse(responseObj);
    })
    .then(parsedString => {
      const parsedQuestions = parsedString.slice(0, 4);
      console.log('at location', answerLocation);
      if (parsedQuestions) {
        this.setState({
          data: update(
            this.state.data,
            {
              questionList: {$set: parsedQuestions},
              hintCount: {$set: 0},
              answer: {$set: answerLocation}
            }
            )
        });
      }
    });
}

function wikiTextFetch(cityName) {
  return (
    window.$.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      jsonp: 'callback',
      dataType: 'jsonp',
      data: {
        action: 'query',
        titles: cityName,
        prop: 'extracts',
        format: 'json'
      }
    })
  );
}

function googleLocation(cityName) {
  console.log('locating', cityName);
  return new Promise((resolve, reject) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({address: cityName}, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK) {
        const answerLocation = [results[0].geometry.location.lat(), results[0].geometry.location.lng()];
        resolve(answerLocation);
      } else {
        reject(status);
      }
    });
  });
}

function randomCity(difficulty) {
  const easyCities = require('../../assets/easyCity.json');
  if (difficulty === 'easy') {
      // eslint-disable-next-line
    return new Promise((resolve, reject) => {
      const selectedCity = easyCities[Math.floor(Math.random() * easyCities.length)];
      resolve(selectedCity);
    });
  }
}

