import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

import useFetch from "../../hooks/useFetch";

import Form from "./Form";
import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  // Using a custom hook
  const { isLoading, error, fetchRequest: LoginRequest } = useFetch();

  // A function that will get response from the request made
  const getResponseData = (responseObj) => {
    if (responseObj?.token) {
      navigate("/");
    } else {
      console.log(responseObj, "error");
    }
  };

  const signInHandler = async (formData) => {
    LoginRequest(
      {
        url: "https://cbdp-lms-apis.onrender.com/api/auth",
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      },
      getResponseData
    );
  };

  return (
    <>
      <Navigation />
      <div className={classes.login} data-testid="login__page">
        <h1 className={classes.h1}>sign in</h1>
        <Form onSubmit={signInHandler} isLoading={isLoading} error={error} />
      </div>
      <Footer />
    </>
  );
};

export default Login;
