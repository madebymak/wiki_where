import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Questions} from './questions.js';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

const MAX_HINT = 3;
const MAX_QUESTIONS = 5;

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
    */
    this.state.data = {
      gameState: 'uninitiated',
      questionList: [],
      answer: [45.0, 45.0],
      questionCount: 0,
      hintCount: 0,
      score: 0
    }
  }
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <p> This is the main element </p>
          <Questions/>
        </main>
        <Footer/>
      </div>
    );
  }
}
