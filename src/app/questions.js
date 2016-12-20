import React from 'react';
import Question from './question';
import RaisedButton from 'material-ui/RaisedButton';

export class Questions extends React.Component {
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
    <RaisedButton className="material-btn" label="Hint"/>
      </ul>
    );
  }
}

Questions.propTypes = {
  questionList: React.PropTypes.array.isRequired,
  hintCount: React.PropTypes.number.isRequired
};
