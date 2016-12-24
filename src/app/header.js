import React, {Component} from 'react';
import New from './new-game.js';

/* eslint-disable */
export class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleNewGame = this.handleNewGame.bind(this);
  // }
  // handleNewGame(e) {
  //   e.preventDefault();
  //   this.props.newGame();
  // }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Wiki Where</h1>
        </div>
        <div className="new-game-btn">
            <New
              newGame={this.props.newGame}/>
          {/* <button type="button" onClick={this.handleNewGame}>
            New Game
          </button> */}
        </div>
      </div>

    );
  }
}

Header.propTypes = {
  newGame: React.PropTypes.func.isRequired
};
