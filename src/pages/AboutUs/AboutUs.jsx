import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

import Aboutimage from "../../assets/About.jpg";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Navigation />
      <div className="About-Box">
        <div className="content-box">
          <h1 className="About-Head">
            Learn with <br />
            fun{" "}
            <span>
              on any
              <br />
              schedule
            </span>
          </h1>
          <p className="About-description">
            Welcome to CBDP Learning Space - the ultimate tool for modern
            Learning and training! This is designed to provide a seamless
            learning experience for students.The Learning Space is packed with
            features that make it easy for educators to create and manage online
            courses. With powerful course creation tools, you can quickly and
            easily create engaging content that keeps students engaged and
            motivated to learn.
          </p>
        </div>
        <div className="About-img-box">
          <img
            className="About-img"
            src={Aboutimage}
            alt="illustration of a boy with the computer analysing different language"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
