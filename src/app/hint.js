import React from 'react';

export default class Hint extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(e) {
    e.preventDefault();
    this.props.addHint();
  }

  render() {
    return ( // eslint-disable-next-line
      <button type="button" ref={el => this.newHint = el} onClick={this.submitHandler}>
        Add Hint
      </button>
    );
  }
}

Hint.propTypes = {
  addHint: React.PropTypes.func.isRequired
};
