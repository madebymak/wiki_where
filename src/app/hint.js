import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        <FlatButton className="hint-next-btn" label="hint" key="1" onTouchTap={this.handleSubmitHandler}/>
        {/* // <button type="button" ref={el => this.newHint = el} onClick={this.submitHandler}>
        //   Hint
        // </button> */}
      </MuiThemeProvider>
    );
  }
}

Hint.propTypes = {
  addHint: React.PropTypes.func.isRequired
};
