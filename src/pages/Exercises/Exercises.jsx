import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import "./exercises.css";

const Dummydata = [
  {
    id: 1,
    question: "What is the fullmeaning of HTML",
    answer: "option b",
    options: ["option a", "option b", "option c", "option d"],
  },

  {
    id: 2,
    question: "What is the full meaning of HTML",
    answer: "option c",
    options: ["option a", "option b", "option c", "option d"],
  },
  {
    id: 3,
    question: "What is the full meaning of HTML",
    answer: "option c",
    options: ["option a", "option b", "option c", "option d"],
  },
  {
    id: 4,
    question: "What is the full meaning of HTML",
    answer: "option c",
    options: ["option a", "option b", "option c", "option d"],
  },
  {
    id: 5,
    question: "What is the full meaning of HTML",
    answer: "option c",
    options: ["option a", "option b", "option c", "option d"],
  },
  {
    id: 6,
    question: "What is the full meaning of HTML",
    answer: "option c",
    options: ["option a", "option b", "option c", "option d"],
  },
  {
    id: 7,
    question: "What is the full meaning of HTML",
    answer: "option c",
    options: ["option a", "option b", "option c", "option d"],
  },
  {
    id: 8,
    question: "What is the full meaning of HTML",
    answer: "option c",
    options: ["option a", "option b", "option c", "option d"],
  },
  {
    id: 9,
    question: "What is the full meaning of HTML",
    answer: "option c",
    options: ["option a", "option b", "option c", "option d"],
  },
  {
    id: 10,
    question: "What is the full meaning of HTML",
    answer: "option c",
    options: ["option a", "option b", "option c", "option d"],
  },
];

const Exercise = () => {
  const [allAnswers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const answerHandler = (id, answer) => {
    const existingQuestion = allAnswers.find((question) => question.id === id);
    if (existingQuestion) {
      existingQuestion.answer = answer;
    } else {
      setAnswers((prev) => {
        const newArr = [...prev, { id, answer }];
        return newArr;
      });
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const findQuestion = (id, correctAnswer) => {
    const questionAnswer = allAnswers.find((answer) => answer.id === id);
    console.log(questionAnswer);
    console.log(id, correctAnswer, questionAnswer.answer);
    return correctAnswer === questionAnswer.answer;
  };
  return (
    <>
      <Navigation />
      <section className="courses-exercise"></section>
      <ul className="courses-exercise-box">
        {Dummydata.map((item, index) => (
          <li key={index}>
            <h4 className="exercise-heading">{item.question}</h4>
            <div className="exercise-div">
              <label>
                <input
                  type="radio"
                  name={item.id}
                  value={item.options[0]}
                  onChange={answerHandler.bind(null, item.id, item.options[0])}
                />
                {item.options[0]}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={item.id}
                  value={item.options[1]}
                  onChange={answerHandler.bind(null, item.id, item.options[1])}
                />
                {item.options[1]}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={item.id}
                  value={item.options[2]}
                  onChange={answerHandler.bind(null, item.id, item.options[2])}
                />
                {item.options[2]}
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={item.id}
                  value={item.options[3]}
                  onChange={answerHandler.bind(null, item.id, item.options[3])}
                />
                {item.options[3]}
              </label>
              <br />
            </div>
            <p>
              {submitted === true && !findQuestion(item.id, item.answer) && (
                <span>The correct answer is {item.answer}</span>
              )}
            </p>
          </li>
        ))}
      </ul>
      <button onClick={submitHandler}>Submit</button>
      <Footer />
    </>
  );
};
export default Exercise;
