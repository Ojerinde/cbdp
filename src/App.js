import { Route, Routes, useNavigate } from "react-router-dom";

import { ErrorBoundary } from "react-error-boundary";
import Button from "./components/UI/Button/Button";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import CourseDetails from "./pages/CourseDetails/CourseDetail";
import CourseDetailsHome from "./pages/CourseDetails/CourseDetailsHome";

import "./App.css";
import ErrorPage from "./pages/404Page/ErrorPage";
import Exercise from "./pages/Exercises/Exercises";
import AboutUs from "./pages/AboutUs/AboutUs";

// Error Boundary FallbackComponent: This is the function that will be called whenever the errorboundary component caught an error
const ErrorFallback = (props) => {
  return (
    <div role="alert" className="boundary__error">
      <p className="error__message">Something went wrong!</p>
      <pre>{props.error.message}</pre>
      <Button className="error__button" onClick={props.resetErrorBoundary}>
        Restart app
      </Button>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        navigate("/");
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Nexted routes */}
        <Route path="/courses" element={<CourseDetailsHome />}>
          <Route path=":syllabus" element={<CourseDetails />} />

          <Route path=":syllabus/:topic/exercises" element={<Exercise />} />

        </Route>

        {/* Routes that will be matched if none of tthe route(s) is matched */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ErrorBoundary>
  );
};
export default App;
