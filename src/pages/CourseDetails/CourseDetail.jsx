import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import CourseDetailItem from "./CourseDetailItem";
import "./CourseDetails.css";
const DummyData = [
  {
    description: [
      "Browsers do not display the HTML tags, but use them to render    the content of the page.",
      " HTML describes the structure of Web pages using markup",
    ],
    title: "Introduction",
    paragrapgh:
      "HTML is the standard markup anguage for creating Web pages,it  stands for Hyper Text Markup Language. HTML describes the  structure of Web pages using markup.",
  },
  {
    description: [
      "Browsers do not display the HTML tags, but use them to render    the content of the page.",
      " HTML describes the structure of Web pages using markup",
    ],
    title: "HTML ELEMENTS",
    paragrapgh:
      "HTML is the standard markup anguage for creating Web pages,it  stands for Hyper Text Markup Language. HTML describes the  structure of Web pages using markup.",
  },
];
const CourseDetails = () => {
  const { syllabus } = useParams();
  return (
    <>
      <Navigation />
      <section className="courses-ext">
        <div className="course-headline">
          <h2 className="course-heading">{syllabus}</h2>
        </div>
        <div className="accordion">
          <ul>
            {DummyData.map((course, index) => (
              <CourseDetailItem
                title={course.title}
                paragraph={course.paragrapgh}
                description={course.description}
                key={index}
              />
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default CourseDetails;
