import React, {Component} from 'react';
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

class Submit extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.setState({open: false});
  }

  handleTouchTap() {
    this.setState({open: true});
    this.props.onHandleGuess();
  }

  render() {
    const standardActions = (
      <FlatButton className="modal-dialog-color" label="OK" key="1" onTouchTap={this.handleRequestClose}/>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <RaisedButton label="submit" onTouchTap={this.handleTouchTap}/>
          <Dialog contentClassName="dialogRadiusHack" overlayClassName="modal-bg" actions={standardActions} modal={false} open={this.state.open}>
            <div className="modal-dialog-color">
              <h3>Results</h3>
              Answer: {this.props.answerCity}<br/>
              Distance: {Math.round(this.props.currentDistance)} km <br/>
              You scored {this.props.scoreToAdd} points on this round!
            </div>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Submit;

Submit.propTypes = {
  onHandleGuess: React.PropTypes.func.isRequired,
  scoreToAdd: React.PropTypes.number.isRequired,
  currentDistance: React.PropTypes.number.isRequired,
  answerCity: React.PropTypes.string.isRequired
};
