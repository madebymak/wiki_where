import React from 'react';

export default class Renew extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(e) {
    e.preventDefault();
    this.props.newQuestion();
  }

  render() {
    return ( // eslint-disable-next-line
      <button type="button" ref={el => this.newHint = el}>
        Refresh Questions
      </button>
    );
  }
}

Renew.propTypes = {
  newQuestion: React.PropTypes.func.isRequired
};
