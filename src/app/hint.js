import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {MAX_HINT} from './main.js';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

export default class Hint extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitHandler = this.handleSubmitHandler.bind(this);
  }
  handleSubmitHandler(e) {
    e.preventDefault();
    this.props.addHint();
  }

  render() {
    return ( // eslint-disable-next-line
      <MuiThemeProvider muiTheme={muiTheme}>
        <FlatButton className="hint-next-btn" disabled={this.props.hintCount >= MAX_HINT} label="hint" key="1" onTouchTap={this.handleSubmitHandler}/>
      </MuiThemeProvider>
    );
  }
}

Hint.propTypes = {
  addHint: React.PropTypes.func.isRequired,
  hintCount: React.PropTypes.number.isRequired
};
