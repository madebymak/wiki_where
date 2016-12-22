import React, {Component} from 'react';
import {Header} from './header';
import Alkali from './cesium.js';
import {Player} from './player-box.js';
import {Triva} from './triva.js';
import {addHint, newQuestion, setPlayerAnswerCoords} from './actions/stateActions.js'; // eslint-disable-line no-unused-vars

export class Main extends Component {
  constructor(props) {
    super(props);
    this.setPlayerAnswerCoords = setPlayerAnswerCoords.bind(this);
    this.state = {data: {
      playerAnswer: [0.0, 0.0],
      answer: [45.0, 45.0]
    }};
  }

  render() {
    return (
      <div>
        <div className="globe">
          <Alkali
            setPlayerAnswerCoords={this.setPlayerAnswerCoords}
            correctAnswerCoords={this.state.data.answer}
            />
        </div>
        <div className="header">
          <Header/>
        </div>
        <div className="main row">
          <div className="col-sm-4">
            <Player/>
            <Triva/>
          </div>
        </div>
      </div>
    );
  }
}
