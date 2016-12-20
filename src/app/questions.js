import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import parseWikitext from 'txtwiki';

const styles = {
  container: {
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    padding: '5px'
  }
};

export class Questions extends Component {
  wikiTextFetch(cityName) {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${cityName}&prop=revisions&rvprop=content&format=json`);
  }

  render() {
    return (
      <div style={styles.container} >
        Round 1 / 5
        <p> Placeholder message for questions</p>
        <RaisedButton className="material-btn" label="Hint"/>
      </div>
    );
  }
}
