const allQuestions = {
  html: {
    introduction: [
      {
        id: 1,
        question: "What is the full meaning of HTML?",
        answer: "Hyper text markup Language",
        options: [
          "Hyper text Marked Language",
          "Hyper text markup Language",
          "Hyper text markdown Language",
          "Hyping text markup Language",
        ],
      },
      {
        id: 2,
        question: "What is the purpose of HTML?",
        answer: "Hyper text markup Language",
        options: [
          "Hyper text Marked Language",
          "Hyper text markup Language",
          "Hyper text markdown Language",
          "Hyping text markup Language",
        ],
      },
    ],
    htmlElements: [
      {
        id: 1,
        question: "What are HTML elements?",
        answer: "option b",
        options: ["option a", "option b", "option c", "option d"],
      },
    ],
    htmlAttributes: [],
    htmlHeadings: [],
  },
  ////////////////// For all css questions ///////////////////////////
  css: {
    introduction: [
      {
        id: 1,
        question: "What is the full meaning of CSS?",
        answer: "option b",
        options: ["option a", "option b", "option c", "option d"],
      },
    ],
  },
  ////////////////// For all Javascript questions ///////////////////////////
  javascript: {
    introduction: [
      {
        id: 1,
        question: "What is do you understand by Javascript?",
        answer: "option b",
        options: ["option a", "option b", "option c", "option d"],
      },
      {
        id: 2,
        question: "What is do you understand by Javascript?",
        answer: "option b",
        options: ["option a", "option b", "option c", "option d"],
      },
    ],
    async: [
      {
        id: 1,
        question: "What is do you understand by Javascript Promises?",
        answer: "option b",
        options: ["option a", "option b", "option c", "option d"],
      },
      {
        id: 2,
        question: "What is do you understand by Javascript callback hell?",
        answer: "option b",
        options: ["option a", "option b", "option c", "option d"],
      },
    ],
  },
};

// The topic is the key inside the html obje
export const getQuestions = (syllabus, topic) => {
  const syllabusTopics = allQuestions?.[syllabus];
  const topicQuestions = syllabusTopics?.[topic];
  return topicQuestions;
};
