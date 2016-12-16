import React from 'react';

export default class Question extends React.Component {

  render() {
    return (
      <li>
        {this.props.question}
      </li>

    );
  }
}

Question.propTypes = {
  question: React.PropTypes.string.isRequired
};
