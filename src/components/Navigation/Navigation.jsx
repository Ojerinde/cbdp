import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const scrollHandler = (section) => {
    if (pathname !== "/") {
      navigate("/");
      if (section === "attendance") {
        setTimeout(() => {
          const attendanceELe = document.getElementById("attendance");
          attendanceELe.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      if (section === "courses") {
        setTimeout(() => {
          const coursesELe = document.getElementById("courses");
          coursesELe.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      if (section === "attendance") {
        const attendanceELe = document.getElementById("attendance");
        attendanceELe.scrollIntoView({ behavior: "smooth" });
      }
      if (section === "courses") {
        const coursesELe = document.getElementById("courses");
        coursesELe.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="header-box">
      <div className="box">
        <div className="logo-box">
          <Link to="/">
            <img className="logo" src={logo} alt="cbdp logo" />
          </Link>
        </div>
        <div className="nav-box">
          <nav className="main-nav">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={scrollHandler.bind(null, "courses")}
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  className="nav-btn"
                  onClick={scrollHandler.bind(null, "attendance")}
                >
                  Attendance
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="log-in-box">
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/signup" className="login-btn">
          Register
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
