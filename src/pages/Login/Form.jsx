import { useState } from "react";
import { ValidatePassword } from "../../lib/Validations";

import Input from "./Input";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Button from "../../components/UI/Button/Button";

import classes from "./Form.module.css";
const Form = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordIcon] = useState(true);
  const [form, setForm] = useState({
    name: "",
    password: "",
    passwordIsValid: false,
    passwordIsFocus: false,
  });

  const nameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const passwordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct.

  const passwordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, passwordIsFocus: true };
    });

    const isValid = ValidatePassword(form.password);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, passwordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, passwordIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
    props.onSubmit({
      fullName: form.name,
      password: form.password,
    });
  };

  return (
    <form className={classes.login__form} onSubmit={submitHandler}>
      <Input
        id="name"
        label=" Full Name"
        type="name"
        invalid={!form.nameIsValid && form.nameIsFocus ? "invalid" : ""}
        placeholder="Enter your full Name"
        value={form.name}
        onChange={nameOnChangeHandler}
      />

      <Input
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        invalid={!form.passwordIsValid && form.passwordIsFocus ? "invalid" : ""}
        placeholder="MinLength(8), uppercase, lowercase, character, number."
        value={form.password}
        onChange={passwordOnChangeHandler}
        onBlur={passwordOnBlurHandler}
        passwordIcon={passwordIcon}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {form.passwordIsFocus && !form.passwordIsValid && (
        <pre className={classes.invalid__input}>
          MinLength(8), uppercase, lowercase, character, number
        </pre>
      )}

      <div style={{ margin: "3rem 0 0" }}>
        {props.isLoading && <LoadingSpinner />}
        {!props.isLoading && props.error.hasError && (
          <p className={classes.error__message}>
            {`Sign in failed! - ${props.error.message}`}
          </p>
        )}
      </div>

      <div className={classes.btn__box}>
        <Button id="btn__submit" type="submit" className={classes.button}>
          Sign In
        </Button>
      </div>
    </form>
  );
};
export default Form;
