import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import CourseDetailItem from "./CourseDetailItem";
import "./CourseDetails.css";
import { getSyllabusContents } from "./DataBanks";

const CourseDetails = () => {
  const [contents, setContents] = useState([]);
  const { syllabus } = useParams();
  useEffect(() => {
    const contents = getSyllabusContents(syllabus.toLowerCase());
    setContents((prev) => contents);
  }, [syllabus]);
  return (
    <>
      <Navigation />
      <section className="courses-ext">
        <div className="course-headline">
          <h2 className="course-heading">{syllabus}</h2>
        </div>
        <div className="accordion">
          <ul>
            {contents.map((course, index) => (
              <CourseDetailItem
                title={course.title}
                paragraph={course.paragrapgh}
                description={course.description}
                index={index + 1}
                links={course.links}
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
