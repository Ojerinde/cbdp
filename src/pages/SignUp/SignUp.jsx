import { useCallback } from "react";

import useFetch from "../../hooks/useFetch";

import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

import Form from "./Form";

import classes from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  // Using a custom hook
  const { isLoading, error, fetchRequest: createAccount } = useFetch();
  // A function that will get response from the request made
  const getResponseData = useCallback(
    (responseObj) => {
      if (responseObj?.status === "success") {
        console.log(responseObj, "success");
        navigate("/login");
      } else {
        console.log(responseObj, "error");
      }
    },
    [navigate]
  );

  const signUpHandler = async (formData) => {
    createAccount(
      {
        url: "https://cbdp-lms-apis.onrender.com/api/users",
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
      <div className={classes.login}>
        <h1 className={classes.h1}>Sign up</h1>
        <Form onSubmit={signUpHandler} isLoading={isLoading} error={error} />
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
