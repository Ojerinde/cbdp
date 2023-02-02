import { useState } from "react";

import { ValidatePassword } from "./lib";

import Input from "../Login/Input";
import Button from "../../components/UI/Button/Button";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";

import classes from "./Form.module.css";
const Form = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordIcon] = useState(true);
  const [form, setForm] = useState({
    name: "",
    password: "",
    nameIsValid: false,
    passwordIsValid: false,
    nameIsFocus: false,
    passwordIsFocus: false,
    phoneIsFocus: false,
    phoneIsValid: false,
    formIsValid: false,
  });

  const nameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, name: e.target.value };
    });
    const { nameIsValid } = form;
    const isValid = e.target.value.split(" ").length >= 2;

    if (nameIsValid && isValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };

  const phoneOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, phone: e.target.value };
    });

    if (e.target.value) {
      setForm((prev) => {
        return { ...prev, phoneIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, phoneIsValid: false };
      });
    }
  };

  const passwordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, password: e.target.value };
    });

    const { emailIsValid, nameIsValid, passwordIsValid } = form;
    const isValid = ValidatePassword(e.target.value);

    if (emailIsValid && isValid && nameIsValid && passwordIsValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct.
  const nameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, nameIsFocus: true };
    });

    if (form.name.split(" ").length >= 2) {
      setForm((prev) => {
        return { ...prev, nameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, nameIsValid: false };
      });
    }
  };

  const phoneOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, phoneIsFocus: true };
    });

    if (form.phone.length === 8) {
      setForm((prev) => {
        return { ...prev, phoneIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, phoneIsValid: false };
      });
    }
  };

  const passwordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, passwordIsFocus: true };
    });

    const isValid = ValidatePassword(form.password);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, passwordIsValid: true, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, passwordIsValid: false, formIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
    props.onSubmit({
      name: form.name,
      phone: form.phone,
      password: form.password,
    });

    setForm({
      name: "",
      password: "",
      phone: "",
      nameIsValid: false,
      passwordIsValid: false,
      phoneIsValid: false,
      phoneIsFocus: false,
      nameIsFocus: false,
      passwordIsFocus: false,
      formIsValid: false,
    });
  };

  return (
    <form
      className={classes.login__form}
      onSubmit={submitHandler}
      data-testid="login__form"
    >
      <Input
        id="fullname"
        label="Full Name"
        type="text"
        invalid={!form.nameIsValid && form.nameIsFocus ? "invalid" : ""}
        placeholder="Enter your Full Name"
        value={form.name}
        onChange={nameOnChangeHandler}
        onBlur={nameOnBlurHandler}
      />
      {form.nameIsFocus && !form.nameIsValid && (
        <pre className={classes.invalid__input}>Enter your full name</pre>
      )}
      <Input
        id="phone"
        label="Phone Number"
        type="number"
        invalid={!form.phoneIsValid && form.phoneIsFocus ? "invalid" : ""}
        placeholder="Enter your Phone number"
        value={form.phone}
        onChange={phoneOnChangeHandler}
        onBlur={phoneOnBlurHandler}
      />
      {form.nameIsFocus && !form.nameIsValid && (
        <pre className={classes.invalid__input}>
          Enter a phone number of length 11
        </pre>
      )}
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
      <div>
        {props.isLoading && <LoadingSpinner />}
        {!props.isLoading && props.error.hasError && (
          <p
            className={classes.error__message}
          >{`Sign up failed! - ${props.error.message}`}</p>
        )}
      </div>

      <div className={classes.btn__box}>
        <Button
          id="btn__submit"
          type="submit"
          disabled={!form.formIsValid}
          className={classes.button}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
};
export default Form;
