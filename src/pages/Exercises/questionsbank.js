const allQuestions = {
  html: {
    introduction: [
      {
        id: 1,
        question: "What is the full meaning of HTML",
        answer: "option b",
        options: ["option a", "option b", "option c", "option d"],
      },
    ],
    htmlElements: [
      {
        id: 1,
        question: "What are HTML elements",
        answer: "option b",
        options: ["option a", "option b", "option c", "option d"],
      },
    ],
    htmlAttributes: [],
    htmlHeadings: [],
  },
  css: {},
  javascript: {},
};

// The topic is the key inside the html obje
export const getQuestions = (stack, topic) => {
  const stackTopics = allQuestions?.[stack];
  const topicQuestions = stackTopics?.[topic];
  return topicQuestions;
};
