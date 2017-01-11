import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {SocialIcon} from 'react-social-icons';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';

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

const {
  FacebookShareButton,
  TwitterShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

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
    const standardActions = (
      <FlatButton backgroundColor="#CCCCCC" label="New Game" key="2" onTouchTap={this.handleNewGame}/>
    );

    const totalPoints = this.props.playerScore + this.props.scoreToAdd;
    const shareUrl = 'http://0.0.0.0:3000/';
    const title = `I played WikiWhere and got ${totalPoints} points, try to beat me!`;
    const description = 'WikiWhere is a geography trivia game that puts your knowledge about the world to the test.';
    const hashtags = ['WikiWhere'];
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <RaisedButton label="Summary" onTouchTap={this.handleTouchTap}/>
          <Dialog title="Final Score" actions={standardActions} modal={false} open={this.state.open}>
            <div className="container border-test">
              <div className="row>">
                <div className="col-sm-4 border-test">
                  <i className="material-icons summary-icon">public</i>
                </div>
                <div className="col-sm-8 border-test">
                  Good Job! You scored {totalPoints} points on 5 rounds of gameplay.<br/>
                  Share your score on social media: <br/>
                  <div className="social-media-group">
                    <FacebookShareButton url={shareUrl} title={title} description={description}>
                      <FacebookIcon round/>
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} title={title} hashtags={hashtags}>
                      <TwitterIcon round/>
                    </TwitterShareButton>
                    <SocialIcon url={`mailto:?to=&subject=${title.replace(' ', '%20')}&body=${description.replace(' ', '%20')}`} network="email" style={{height: 64, width: 64}}/>
                  </div>
                </div>

              </div>
            </div>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

Summary.propTypes = {
  newGame: React.PropTypes.func.isRequired,
  playerScore: React.PropTypes.number.isRequired,
  scoreToAdd: React.PropTypes.number.isRequired
};
