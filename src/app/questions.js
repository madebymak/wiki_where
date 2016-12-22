import React from 'react';
import Question from './question';

export class Questions extends React.Component {

  componentWillReceiveProps() {
    console.log("trying", this.props.questionList);
    if (this.props.questionList.length === 0) {
      console.log("Trying again");
      this.props.newQuestion();
    }
  }

  render() {
    const questionToRender = (this.props.questionList).slice(0, this.props.hintCount);
    console.log(questionToRender);
    return (
      <ul>
      {questionToRender.map(question =>
        <Question
          question={question}
          key={question}
          />
      )
    }
      </ul>
    );
  }
}

Questions.propTypes = {
  questionList: React.PropTypes.array.isRequired,
  hintCount: React.PropTypes.number.isRequired,
  newQuestion: React.PropTypes.func.isRequired
};
