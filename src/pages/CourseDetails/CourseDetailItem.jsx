import { useState } from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaAward } from "react-icons/fa";

const CourseDetailItem = ({ index, title, description, paragraph, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`item ${open ? "open" : ""}`}>
      <p className="number">{`${index}`.padStart(2, 0)}</p>
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
              <li index={index}>{desc}</li>
            ))}
            {links &&
              links.map((link, index) => (
                <li index={index}>
                  {link?.title === "Youtube" && (
                    <Link
                      className="courses-link"
                      to={link?.URL}
                      target="_blank"
                    >
                      {link?.title}
                    </Link>
                  )}
                  {link?.title === "Exercise" && (
                    <Link className="courses-link" to={link?.URL}>
                      {link?.title}
                    </Link>
                  )}
                  {link?.title === "Youtube" && (
                    <FaYoutube className="course-icon" />
                  )}
                  {link?.title === "Exercise" && (
                    <FaAward className="course-icon" />
                  )}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default CourseDetailItem;
