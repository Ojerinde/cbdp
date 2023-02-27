import { Link } from "react-router-dom";
const CourseItem = ({ syllabus, description }) => {
  return (
    <li className="course-1">
      <div className="course-img-box">
        <p className="course-main-text">{syllabus}</p>
      </div>
      <p className="course-description">{description}</p>
      <div className="text-centering">
        <div className="link-box">
          <Link to={`/courses/${syllabus}`} className="start-link">
            Start
          </Link>
        </div>
      </div>
    </li>
  );
};
export default CourseItem;
