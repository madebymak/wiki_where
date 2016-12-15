import React, {Component} from 'react';
// import parseWikitext from 'txtwiki';

export class Questions extends Component {
  wikiTextFetch(cityName) {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${cityName}&prop=revisions&rvprop=content&format=json`);
  }

  render() {
    return (
      <div>
        <p> Placeholder message for questions </p>
      </div>
    );
  }
}

