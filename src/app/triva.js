import React, {Component} from 'react';
import {Questions} from './questions.js';
import Hint from './hint.js';
import Renew from './renew.js';
import {addHint, newQuestion} from './actions/stateActions.js'; // eslint-disable-line no-unused-vars

export const MAX_HINT = 3;
export const MAX_QUESTIONS = 5;

const styles = {
  container: {
    border: '0px solid red',
    borderRadius: '6px',
    // display: 'flex',
    // flexDirection: 'column',
    minWidth: '250px',
    maxHeight: '500px',
    padding: '10px',
    overflow: "scroll"
  }
};

export class Triva extends Component {
  constructor(props) {
    super(props);
    this.addHint = addHint.bind(this);
    this.newQuestion = newQuestion.bind(this);
    this.state = {
      data: {
        gameState: 'uninitiated',
        questionList: [
          'Question 1', 'Question 2', 'Question 3'
        ],
        answer: [
          45.0, 45.0
        ],
        questionCount: 0,
        hintCount: 0,
        score: 0,
        difficulty: 'easy'
      }
    };
  }

  render() {
    return (
      <div>
        <div style={styles.container}>
          Which City?<br/>
          <div>
            <Questions hintCount={this.state.data.hintCount} questionList={this.state.data.questionList}/>
          </div>
        </div>
        <Hint addHint={this.addHint}/>
        <Renew newQuestion={this.newQuestion}/><br/>
      </div>
    );
  }
}
