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
    console.log(allAnswers);
  };

  return (
    <>
      <Navigation />
      <section className="courses-exercise"></section>
      {/* <ul className="courses-exercise-box">
        {Dummydata.map((item, index) => (
          // <li key={index}>
          //   <h4 className="exercise-heading">{item.question}</h4>
          //   <div className="exercise-div">
          //     {item.options.map(option, index) => (
          //     <div key={index}>
          //       <input
          //         id={index}
          //         type="radio"
          //         name={item.answer}
          //         onChange={answerHandler.bind(null, item.id, option)}
          //       />
          //       <label htmlFor={item.id}>{option}</label>
          //     </div>
          //     ))}
          //   </div>
          // </li>
        ))}
      </ul> */}
      <button onClick={submitHandler}>Submit</button>
      <Footer />
    </>
  );
};
export default Exercise;
