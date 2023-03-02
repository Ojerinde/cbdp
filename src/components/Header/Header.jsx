import Navigation from "../Navigation/Navigation";
import headerImg from "../../assets/header.png";

import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const scrollHandler = () => {
    const coursesELe = document.getElementById("courses");
    coursesELe.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <header className="main-header">
        <Navigation />
        <main className="main">
          <div className="main-box">
            <div className="main-content-box">
              <h1 className="main-heading">
                Build Skills With Experts Any Time Anywhere
              </h1>
              <p className="main-description">
                CBDP coding learning space is where students come to get most if
                what is being taught in class and also to have a basic knowledge
                of most programming Language to become more efficient and
                proficient.
              </p>

              <Link to="#" className="course-link" onClick={scrollHandler}>
                Start Learning
              </Link>
            </div>

            <div className="illustration-box">
              <img
                className="illustration-img"
                src={headerImg}
                alt="illustration of a boy with the computer"
              />
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
