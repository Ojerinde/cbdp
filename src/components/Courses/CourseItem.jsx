import { Link } from "react-router-dom";
const CourseItem = ({ syllabus, description }) => {
  return (
    <li class="course-1">
      <div class="course-img-box">
        <p class="course-main-text">{syllabus}</p>
      </div>
      <p class="course-description">{description}</p>
      <div class="text-centering">
        <div class="link-box">
          <Link to={`/courses/${syllabus}`} class="start-link">
            Start
          </Link>
        </div>
      </div>
    </li>
  );
};
export default CourseItem;
