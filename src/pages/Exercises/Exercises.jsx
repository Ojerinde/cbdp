import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/UI/Button/Button";
import "./exercises.css";
import { getQuestions } from "./questionsbank";

const Exercise = () => {
  const [allAnswers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const { topic, syllabus } = useParams();
  console.log(topic, syllabus);

  useEffect(() => {
    const syllabusToLowercase = syllabus.toLowerCase();
    const allQuestions = getQuestions(syllabusToLowercase, topic);
    setQuestions((prev) => allQuestions);
  }, [syllabus, topic]);

  const answerHandler = (id, answer) => {
    const existingQuestion = allAnswers?.find((question) => question.id === id);
    if (existingQuestion) {
      existingQuestion.answer = answer;
    } else {
      setAnswers((prev) => {
        const newArr = [...prev, { id, answer }];
        return newArr;
      });
import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [allAnswers, setAnswers] = useState([]);

  const answerHandler = (id, option) => {
    console.log(allAnswers, id, option);
    const existingQuestion = allAnswers?.filter((ans) => {
      return ans.id === id;
    });
    if (existingQuestion) {
      const filteredAnswers = allAnswers?.filter((ans) => {
        return ans.id !== id;
      });
      setAnswers((prev) => [...filteredAnswers, { id, option }]);
    } else {
      setAnswers((prev) => prev.push({ id, option }));
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setshowScore(true);
  };

  const findQuestion = (id, correctAnswer) => {
    setSubmitted(false);
    const questionAnswer = allAnswers?.find((answer) => answer.id === id);
    if (correctAnswer === questionAnswer?.answer) {
      setTotalScore((prev) => {
        return (prev = prev + 1);
      });
    }
    return correctAnswer === questionAnswer?.answer;
  };
  const retryHandler = () => {
    navigate(0);
  };
    console.log(allAnswers);
  };

  return (
    <>
      <Navigation />
      <section className="courses-exercise"></section>
      <ul className="courses-exercise-box">
        {questions.map((item, index) => (
          <li key={index}>
            <h4 className="exercise-heading">{item.question}</h4>
            <div className="exercise-div">
              <label>
                (A)
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
                (B)
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
                (C)
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
                (D)
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
      {showScore === true && (
        <p>
          You score a total of {totalScore} out of {questions.length}
          <span>
            <Button className="retry__button" onClick={retryHandler}>
              Retry
            </Button>
          </span>
        </p>
      )}
      <Button className="submit__button" onClick={submitHandler}>
        Submit
      </Button>
     
 
      <Footer />
    </>
  );
};
export default Exercise;
