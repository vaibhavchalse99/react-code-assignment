import { useContext, Fragment, useReducer } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import authContext from "../context/authContext";
import SigninComponent from "../component/SigninComponent";
import { loginReducer, initialValue, schema } from "../reducer/loginReducer";

import "../css/form.css";

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
