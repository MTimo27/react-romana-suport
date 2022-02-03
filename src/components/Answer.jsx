import React from 'react';

function Answer({
  id,
  handleAnswerClick,
  title,
  selectedAnswer,
  point,
  submited,
  correct_answer,
}) {
  //This changes the classname of the answer accordingly
  //to the point and submited props
  let color = '';
  if (selectedAnswer === title && point && submited) {
    color = 'button--green';
  } else if (title === correct_answer && submited) {
    color = 'button--green';
  } else if (selectedAnswer === title && !submited) {
    color = 'button--grey';
  } else if (selectedAnswer === title && submited) {
    color = 'button--red';
  }

  return (
    <div>
      <button
        disabled={submited}
        className={`button ${color}`}
        id={id}
        onClick={handleAnswerClick}
      >
        {title}
      </button>
    </div>
  );
}

export default Answer;
