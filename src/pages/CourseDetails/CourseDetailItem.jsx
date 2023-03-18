import { useState } from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaAward } from "react-icons/fa";

const CourseDetailItem = ({ index, title, description, paragraph, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`item ${open ? "open" : ""}`}>
      <p className="number">{`${index}`.padStart(2, 0)}</p>
      <p className="text">{title}</p>
      <FaAward className="icon" onClick={() => setOpen((prev) => !prev)} />

      {open && (
        <div className="hidden-box">
          <p>{paragraph}</p>
          <ul>
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
            {links &&
              links.map((link, idx) => (
                <li key={idx}>
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
