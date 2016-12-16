import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Questions} from './questions.js';
import Hint from './hint.js';
import {addHint, newQuestion} from './actions/stateActions.js'; // eslint-disable-line no-unused-vars

export const MAX_HINT = 3;
export const MAX_QUESTIONS = 5;

export class Main extends Component {
  constructor(props) {
    super(props);

    /*
    the state will contain
    gameState -> one of 'uninitiated', 'ongoing', 'end'
    questionList -> [String] of length MAX_HINT
    answer -> [float, float] representing coordinates
    questionCount -> int between 0, MAX_QUESTIONS
    hintCount -> int between 0, MAX_HINT
    score -> int representing the current score
    difficulty -> one of 'easy', 'hard'
    */
    this.addHint = addHint.bind(this);
    this.newQuestion = newQuestion.bind(this);
    this.state = {data: {
      gameState: 'uninitiated',
      questionList: ['Question 1', 'Question 2', 'Question 3'],
      answer: [45.0, 45.0],
      questionCount: 0,
      hintCount: 0,
      score: 0,
      difficulty: 'easy'
    }};
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <p> This is the main element </p>
          <Questions
            hintCount={this.state.data.hintCount}
            questionList={this.state.data.questionList}
            />
          <Hint
            addHint={this.addHint}
            />
        </main>
        <Footer/>
      </div>
    );
  }
}
