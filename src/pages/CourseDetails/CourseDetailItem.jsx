import { useState } from "react";
import { Link } from "react-router-dom";

const CourseDetailItem = ({ index, title, description, paragraph }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`item ${open ? "open" : ""}`}>
      <p className="number">{index}</p>
      <p className="text">{title}</p>
      <svg
        onClick={() => setOpen((prev) => !prev)}
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      {open && (
        <div className="hidden-box">
          <p>{paragraph}</p>
          <ul>
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <div className="course-flex">
            <Link to="/">Youtube</Link>
            <ion-icon name="logo-youtube" className="course-icon"></ion-icon>
          </div>
          <div className="course-flex margin-left">
            <Link to="/">Excercise</Link>
            <ion-icon name="ribbon" className="course-icon"></ion-icon>
          </div>
        </div>
      )}
    </div>
  );
};
export default CourseDetailItem;
