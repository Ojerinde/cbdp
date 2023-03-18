import { useNavigate } from "react-router-dom";
import { GetItemFromLocalStorage } from "../../lib/Validations";
import Button from "../UI/Button/Button";
const CourseItem = ({ syllabus, description }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    const isLoggedIn = GetItemFromLocalStorage("isLoggedIn");
    if (isLoggedIn?.status !== "success") {
      navigate("/login");
    } else {
      navigate(`/courses/${syllabus}`);
    }
  };

  return (
    <li className="course-1">
      <div className="course-img-box">
        <p className="course-main-text">{syllabus}</p>
      </div>
      <p className="course-description">{description}</p>
      <div className="text-centering">
        <div className="link-box">
          <Button onClick={navigateHandler} className="start-link">
            Start
          </Button>
        </div>
      </div>
    </li>
  );
};
export default CourseItem;
