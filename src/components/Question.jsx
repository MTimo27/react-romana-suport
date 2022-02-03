import React from 'react';
import Answer from './Answer';

function Question({
  all_answers,
  point,
  selectedAnswer,
  handleAnswerClick,
  question,
  submited,
  correct_answer,
}) {
  //This maps all_answers array prop
  //And creates answer components
  const components = all_answers.map((item, i) => {
    return (
      <Answer
        key={item}
        id={i}
        selectedAnswer={selectedAnswer}
        point={point}
        title={item}
        handleAnswerClick={handleAnswerClick}
        submited={submited}
        correct_answer={correct_answer}
      />
    );
  });

  return (
    <div className="question">
      <h1 className="question__title">{question}</h1>
      <div className="question__answers">{components}</div>
    </div>
  );
}

export default Question;
