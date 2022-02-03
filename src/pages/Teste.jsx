import { useEffect, useState } from 'react';
import arrayShuffle from 'array-shuffle';
import Question from '../components/Question';

function Teste() {
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [components, setComponents] = useState([]);
  const [submited, setSubmited] = useState(false);

  //Gets the data from the api
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        'https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple'
      );
      const data = await res.json();
      setData(data.results);
    };
    getData();
  }, []);

  //Checkes if the clicked answer is the correct one
  //and changes the point state accordingly
  useEffect(() => {
    const handleAnswerClick = (e) => {
      const answerId = e.currentTarget.id;
      const answerContent = e.currentTarget.textContent;
      setQuestions((prev) => {
        let array = prev;

        for (let i = 0; i < array.length; i++) {
          if (
            array[i].all_answers[answerId] === answerContent
          )
            array[i].selectedAnswer =
              array[i].all_answers[answerId];
          if (
            array[i].selectedAnswer ===
            array[i].correct_answer
          )
            array[i].point = 1;
          else array[i].point = 0;
        }
        return array;
      });
      setQuestions((prev) => [...prev]);
      //This makes react understand that the change has changed
      //because react is stoopid and only looks at the base elements of an array for changes
      //for ex [1, 2, 3] if the first item becomes 0 it will trigger a state change
      //but if the array is [{object1}, {object2}] if a key in an object changes its value
      //react doesn t register the state change
    };

    //Make the array of questions
    //and update it everytime data changes
    const makeQuestions = () => {
      let arrayOfQuestions = [];
      for (let i = 0; i < data.length; i++) {
        arrayOfQuestions.push({
          key: data[i].question,
          correct_answer: data[i].correct_answer,
          incorrect_answers: data[i].incorrect_answers,
          all_answers: arrayShuffle([
            data[i].correct_answer,
            ...data[i].incorrect_answers,
          ]),
          question: data[i].question,
          point: 0,
          selectedAnswer: '',
          handleAnswerClick: handleAnswerClick,
          submited: false,
        });
      }
      setQuestions(arrayOfQuestions);
    };
    makeQuestions();
  }, [data]);

  //This function is called when the submit button is clicked
  //And it rerenders the components
  //with the submited props changed in true
  const handleSubmit = () => {
    let ok = true;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].selectedAnswer === '') {
        ok = false;
      }
    }
    if (!ok) {
      alert('Please fill all the questions');
    } else {
      setQuestions((prev) => {
        let array = prev;
        array.map((item) => {
          return (item.submited = true);
        });
        return array;
      });
      setSubmited(true);
      setQuestions((prev) => [...prev]);
    }
  };

  //This resets the game and
  //fetches the data again
  const resetGame = () => {
    const getData = async () => {
      const res = await fetch(
        'https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple'
      );
      const data = await res.json();
      setData(data.results);
    };
    setSubmited(false);
    getData();
  };

  //Maps through all questions array and
  //passes the props to the Question components
  useEffect(() => {
    const createComponents = () => {
      const components = questions.map((item, i) => {
        return (
          <Question
            key={item.key}
            correct_answer={item.correct_answer}
            incorrect_answers={item.incorrect_answers}
            all_answers={item.all_answers}
            question={item.question}
            point={item.point}
            selectedAnswer={item.selectedAnswer}
            handleAnswerClick={item.handleAnswerClick}
            submited={item.submited}
          />
        );
      });
      setComponents(components);
    };
    createComponents();
  }, [questions]);

  //Adds all the points from the questions
  //that were answered correctly
  const points = () => {
    let points = 0;
    for (let i = 0; i < questions.length; i++) {
      points += questions[i].point;
    }
    return points;
  };

  return (
    <div className="teste">
      <div className="container container--teste">
        {components}

        <button
          className="button"
          onClick={submited ? resetGame : handleSubmit}
        >
          {submited ? 'Replay game' : 'Submit answers'}
        </button>
        {submited && (
          <h3>
            {`You got ${points()} questions right out of
          ${questions.length} questions`}
          </h3>
        )}
      </div>
    </div>
  );
}

export default Teste;
