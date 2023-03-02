import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/UI/Button/Button";

import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Navigation />
      {/* Application */}
      <div classname={classes.error__div}>
        <div className={classes.nopage__card}>
          <h1 className={classes.h1}>
            4<span>0</span>4
          </h1>
          <h2 className={classes.h2}>Page not found</h2>
          <h3 className={classes.h3}>
            Kindly go back to a valid url by clicking on the button below
          </h3>
          <Button onClick={goHomeHandler} className={classes.button}>
            Go home
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ErrorPage;
