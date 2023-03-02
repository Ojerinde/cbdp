import Navigation from "../Navigation/Navigation";
import headerImg from "../../assets/header.png";

import "./Header.css";
const Header = () => {
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

              <a href="/" className="course-link">
                Start Learning
              </a>
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
