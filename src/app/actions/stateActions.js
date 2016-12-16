import {MAX_HINT, MAX_QUESTION} from '../main.js';
import parseWikitext from 'txtwiki';

const fetchOptions = {
  method: 'GET',
  mode: 'no-cors'
};

export function addHint() {
  let output: {};
  if (this.state.data.hintCount >= MAX_HINT) {
    console.warn('Number of hints already at maximum');
  } else {
    output = {hintCount: this.state.data.hintCount + 1};
  }
  return output;
}

export function newQuestion(difficulty = 'easy') {
  if (this.state.data.questionCount >= MAX_QUESTION) {
    return;
  }
  function wikiTextFetch(cityName) {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${cityName}&prop=revisions&rvprop=content&format=json`, fetchOptions);
  }
  function randomCity(difficulty) {
    console.log(difficulty);
    return "Uruk";
  }
  return randomCity(difficulty)
    .then(cityName => {
      return wikiTextFetch(cityName);
    })
    .then(outputString => {
      console.log('??????????????????');
      console.log('outputString');
      parseWikitext(outputString);
    })
    .then(parsedString => {
      const parsedQuestions = parsedString.split('.').slice(0, 4);
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
      console.log(parsedQuestions);
      this.setState({data: {questionList: parsedQuestions}});
    });
}
