import Navigation from "../Navigation/Navigation";
import headerImg from "../../assets/header.png";

import "./Header.css";
const Header = () => {
  return (
    <>
      <header class="main-header">
        <Navigation />
        <main class="main">
          <div class="main-box">
            <div class="main-content-box">
              <h1 class="main-heading">
                Build Skills With Experts Any Time Anywhere
              </h1>
              <p class="main-description">
                CBDP coding learning space is where students come to get most if
                what is being taught in class and also to have a basic knowledge
                of most programming Language to become more efficient and
                proficient.
              </p>

              <a href="/" class="course-link">
                Start Learning
              </a>
            </div>

            <div class="illustration-box">
              <img
                class="illustration-img"
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
