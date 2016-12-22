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

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  handleRequestClose() {
    this.setState({open: false});
  }

  handleTouchTap() {
    this.setState({open: true});
  }

  render() {
    const standardActions = (<FlatButton label="Ok" onTouchTap={this.handleRequestClose}/>);

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <RaisedButton label="new game" onTouchTap={this.handleTouchTap}/>
          <Dialog title="Dialog With Actions" actions={standardActions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
          The actions in this window were passed in as an array of React objects.
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
