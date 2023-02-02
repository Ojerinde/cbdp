import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div class="header-box">
      <div class="box">
        <div class="logo-box">
          <Link to="/">
            <img class="logo" src={logo} alt="cbdp logo" />
          </Link>
        </div>
        <div class="nav-box">
          <nav class="main-nav">
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Courses</a>
              </li>
              <li>
                <a href="/">Attendance</a>
              </li>
              <li>
                <a href="/">Quiz</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="log-in-box">
        <Link to="/login" class="login-btn">
          Log-in
        </Link>
        <Link to="/signup" class="login-btn">
          Register
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
