import React, {Component} from 'react';
import {Questions} from './questions.js';
import Hint from './hint.js';
import Renew from './renew.js';

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

export class Trivia extends Component {
  render() {
    return (
      <div>
        <div style={styles.container}>
          Which City?<br/>
          <div>
            <Questions
              hintCount={this.props.stateData.hintCount}
              questionList={this.props.stateData.questionList}
              newQuestion={this.props.newQuestion}
              />
          </div>
        </div>
        <Hint addHint={this.props.addHint}/>
        <Renew newQuestion={this.props.newQuestion}/>
        <br/>
      </div>
    );
  }
}

Trivia.propTypes = {
  stateData: React.PropTypes.object.isRequired,
  newQuestion: React.PropTypes.func.isRequired,
  addHint: React.PropTypes.func.isRequired,
  setPlayerAnswerCoords: React.PropTypes.func.isRequired
};