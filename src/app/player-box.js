import React, {Component} from 'react';

const styles = {
  container: {
    border: '1px solid red',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    padding: '10px'
  }
};

export class Player extends Component {

  render() {
    return (
      <div style={styles.container}>
        Player 1<br/>
        Score: 1, 000, 000 pts
      </div>
    );
  }
}
