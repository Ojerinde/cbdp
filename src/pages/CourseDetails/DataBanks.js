const allQuestions = {
  html: [
    {
      description: [
        "Browsers do not display the HTML tags, but use them to render    the content of the page.",
        " HTML describes the structure of Web pages using markup",
      ],

      title: "Introduction",
      paragrapgh:
        "HTML is the standard markup anguage for creating Web pages,it  stands for Hyper Text Markup Language. HTML describes the  structure of Web pages using markup.",
      links: [
        {
          title: "Youtube",
          URL: "https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
        },
        {
          title: "Exercise",
          URL: "/courses/HTML/introduction/exercises",
        },
      ],
    },
    {
      description: [
        " <tagname>Content goes here...</tagname> ",
        "The HTML element is everything from the start tag to the end tag.",
        "Start tag Element content End tag",
        "<h1> My First Heading </h1>",
        "<p> My first paragraph </p>",
        "<br></br>",
      ],
      title: "HTML Elements",
      paragrapgh:
        " HTML describes the structure of Web pages using markupAn HTML element usually consists of a start tag and end tag, with the content inserted in between",
      links: [
        {
          title: "Youtube",
          URL: "https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
        },
        {
          title: "Exercise",
          URL: "/courses/HTML/htmlElements/exercises",
        },
      ],
    },
    {
      description: [
        "Attributes are always specified in the start tag",
        "Attributes usually come in name/value pairs like: name=”value”",

        " HTML describes the structure of Web pages using markup",
      ],
      title: "HTML Attributes",
      paragrapgh:
        "Attributes provide additional information about HTML elements.All HTML elements can have attributes.",
      links: [
        {
          title: "Youtube",
          URL: "https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
        },
        {
          title: "Exercise",
          URL: "/courses/HTML/htmlAttributes/exercises",
        },
      ],
    },

    {
      description: [
        "<tagname>Content goes here...</tagname> ",
        "The HTML element is everything from the start tag to the end tag.",
        "Start tag Element content End tag",
        "<h1> My First Heading </h1>",
        "<p> My first paragraph </p>",
        "<br></br>",
      ],
      title: "HTML Elements",
      paragrapgh:
        " HTML describes the structure of Web pages using markupAn HTML element usually consists of a start tag and end tag, with the content inserted in between",
      links: [
        {
          title: "Youtube",
          URL: "https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
        },
        {
          title: "Exercise",
          URL: "/courses/HTML/htmlElements/exercises",
        },
      ],
    },

    {
      description: [
        "<h1> defines the most important heading. <h6> defines the least important heading.",
        "  Headings are defined with the <h1> to <h6> tags. ",
        "<!DOCTYPE html>",
        "<html>",
        "<body>",
        "<h1>Heading 1</h1>",
        "<h2>Heading 2</h2>",
        "<h3>Heading 3</h3>",
        "<h4>Heading 4</h4>",
        "<h5>Heading 5</h5>",
        "<h6>Heading 6</h6>",
        "</body>",
        "</html>",
      ],

      title: "HTML Headings",
      paragrapgh:
        "Headings are important aspects of a webpage which are used to set the level of importance in the page",
      links: [
        {
          title: "Youtube",
          URL: "https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
        },
        {
          title: "Exercise",
          URL: "/courses/HTML/htmlHeadings/exercises",
        },
      ],
    },
  ],
  css: [
    {
      description: ["This is css description", "Are you sure"],

      title: "Introduction",
      paragrapgh: "CSS is cascading stylesheet",
      links: [
        {
          title: "Youtube",
          URL: "https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
        },
        {
          title: "Exercise",
          URL: "/courses/CSS/introduction/exercises",
        },
      ],
    },
  ],
  javascript: [
    {
      description: ["This is Javascript description", "Are you sure"],
      title: "Introduction",
      paragrapgh: "Javascript is the engine house",
      links: [
        {
          title: "Youtube",
          URL: "https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
        },
        {
          title: "Exercise",
          URL: "/courses/JAVASCRIPT/introduction/exercises",
        },
      ],
    },
    {
      description: ["This is Javascript description", "Are you sure"],
      title: "Asychronous Javascript",
      paragrapgh: "Javascript is the engine house",
      links: [
        {
          title: "Youtube",
          URL: "https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
        },
        {
          title: "Exercise",
          URL: "/courses/JAVASCRIPT/async/exercises",
        },
      ],
    },
  ],
};

// The topic is the key inside the html obje
export const getSyllabusContents = (syllabus) => {
  const syllabusContent = allQuestions?.[syllabus];
  return syllabusContent;
};
