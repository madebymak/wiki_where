const _ = require('underscore');
const CENSOR_BLOCK = '\u25A0';
const MIN_LENGTH = 150;

export default function parseWikiResponse(responseObj) {
  const textbody = responseObj.query.pages[Object.keys(responseObj.query.pages)[0]].extract;
  const answerCity = responseObj.query.pages[Object.keys(responseObj.query.pages)[0]].title;
  const $htmlEntire = window.$.parseHTML(textbody);
  let feasiblePara = $htmlEntire.filter(element => {
    return (element.nodeName === "P" && element.textContent.length > MIN_LENGTH);
  });
  feasiblePara = feasiblePara.map(element => {
    let processedString = censor(element.textContent, answerCity);
    processedString = stripParen(processedString);
    return processedString;
  });
  feasiblePara = feasiblePara.map(wholeSentenceMin);
  feasiblePara = feasiblePara.filter(element => {
    return censoredOnly(element);
  });
  return _.sample(feasiblePara, 3);
}

function censor(text, censorText, replaceText = CENSOR_BLOCK, repeatCount = 5) {
  const censorRegex = new RegExp(censorText, 'g');
  return text.replace(censorRegex, replaceText.repeat(repeatCount));
}

function stripParen(text) {
  return text.replace(/\((.*?)\)/g, '');
}

function censoredOnly(text, censorBlock = CENSOR_BLOCK) {
  return Boolean(text.match(censorBlock));
}

function wholeSentenceMin(text, minLength = MIN_LENGTH) {
  let outputString = '';
  let moreSentence = 0;
  const sentences = text.split('.');
  let i = 0;
  function addNext(i) {
    outputString += sentences[i];
    outputString += '.';
  }
  while (moreSentence < 2) {
    addNext(i);
    const lastCapital = outputString[outputString.length - 2].match(/[A-Z]/);
    const noSpaceFollow = sentences[i + 1] && sentences[i + 1][0] !== ' ';
    if (lastCapital || noSpaceFollow) {
      moreSentence -= 1;
    }
    if (outputString.length > minLength) {
      moreSentence += 1;
    }
    i += 1;
  }
  return outputString;
}
