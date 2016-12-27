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
    this.props.onSubmit();
  }

  render() {
    const standardActions = (
      <FlatButton label="OK" key="1" onTouchTap={this.handleRequestClose}/>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <RaisedButton label="submit" onTouchTap={this.handleTouchTap}/>
          <Dialog title="Results" actions={standardActions} modal={false} open={this.state.open}>
            Score: <br/>
            Distance:
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Submit;

Submit.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};
