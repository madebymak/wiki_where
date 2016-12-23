import React from 'react';

const styles = {
  container: {
    border: '1px solid red',
    marginBottom: '5px'
  }
};

export default class Question extends React.Component {

  render() {
    return (
      <div style={styles.container}>
        {this.props.question}
      </div>

    );
  }
}

Question.propTypes = {
  question: React.PropTypes.string.isRequired
};
