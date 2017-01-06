import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center'
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

export default class Summary extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleRequestClose() {
    this.setState({open: false});
  }

  handleNewGame() {
    this.setState({open: false});
    this.props.newGame();
  }

  handleTouchTap() {
    this.setState({open: true});
  }

  render() {
    const standardActions = [
      <FlatButton label="Cancel" key="1" onTouchTap={this.handleRequestClose}/>,
      <FlatButton label="New Game" key="2" onTouchTap={this.handleNewGame}/>
    ];

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <RaisedButton label="Summary" onTouchTap={this.handleTouchTap}/>
          <Dialog title="Final Score" actions={standardActions} modal={false} open={this.state.open}>
            Total points scored: {this.props.playerScore}<br/>
            Good job!<br/>
            Share on social media: <br/>
            Facebook Twitter Email
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

Summary.propTypes = {
  newGame: React.PropTypes.func.isRequired,
  playerScore: React.PropTypes.func.isRequired
};
