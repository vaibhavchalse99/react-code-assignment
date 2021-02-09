import { useContext, Fragment, useReducer } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

import authContext from "../context/authContext";
import SigninComponent from "../component/SigninComponent";

import "../css/form.css";

let schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

let initialValue = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

const loginReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "updateEmail":
      return { ...state, email: payload.email, emailError: "" };
    case "updatePassword":
      return { ...state, password: payload.password, passwordError: "" };
    case "updateEmailError":
      return { ...state, emailError: payload.emailError };
    case "updatePasswordError":
      return { ...state, passwordError: payload.passwordError };
    default:
      return state;
  }
};

const SigninContainer = () => {
  const history = useHistory();
  const { setAuthenticated } = useContext(authContext);

  const [loginState, dispatch] = useReducer(loginReducer, initialValue);

  const submitForm = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: loginState.email,
        password: loginState.password,
      })
      .then((response) => {
        const {
          data: { token },
          status,
        } = response;
        if (status === 200) {
          setAuthenticated(true);
          console.log(token);
          history.push("/users");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = await validate();

    if (Object.keys(err).length === 0) {
      submitForm();
    } else {
      if (err.email) {
        dispatch({
          type: "updateEmailError",
          payload: { emailError: err.email },
        });
      }
      if (err.password) {
        dispatch({
          type: "updatePasswordError",
          payload: { passwordError: err.password },
        });
      }
    }
  };

  const validate = async () => {
    try {
      await schema.validate(loginState, { abortEarly: false });
      return {};
    } catch (err) {
      let errObj = {};
      for (let { path, message } of err.inner) {
        errObj[path] = message;
      }
      return errObj;
    }
  };

  const handleEmailInput = (e) => {
    dispatch({ type: "updateEmail", payload: { email: e.target.value } });
  };

  const handlePasswordInput = (e) => {
    dispatch({ type: "updatePassword", payload: { password: e.target.value } });
  };

  return (
    <Fragment>
      <SigninComponent
        loginState={loginState}
        handleSubmit={handleSubmit}
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
      />
    </Fragment>
  );
};

export default SigninContainer;
