import React from 'react';

export default class Question extends React.Component {

  render() {
    return (
      <li key={this.props.key}>
        {this.props.question}
      </li>

    );
  }
}

Question.propTypes = {
  key: React.PropTypes.number.isRequired,
  question: React.PropTypes.string.isRequired
};
