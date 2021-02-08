import { useState, useContext, Fragment } from "react";
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
};

const SigninContainer = () => {
  const history = useHistory();
  const { setAuthenticated } = useContext(authContext);

  const [formValues, serFormValues] = useState(initialValue);
  const [formError, setFormError] = useState({});

  const submitForm = () => {
    axios
      .post("https://reqres.in/api/login", formValues)
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
    const err = await validate(FormData);
    setFormError(err);
    if (Object.keys(err).length === 0) submitForm();
  };

  const validate = async () => {
    try {
      await schema.validate(formValues, { abortEarly: false });
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
    const { email, ...newFormErrorState } = formError;
    setFormError(newFormErrorState);
    serFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordInput = (e) => {
    const { password, ...newFormErrorState } = formError;
    setFormError(newFormErrorState);
    serFormValues({ ...formValues, password: e.target.value });
  };

  return (
    <Fragment>
      <SigninComponent
        handleSubmit={handleSubmit}
        formError={formError}
        formValues={formValues}
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
      />
    </Fragment>
  );
};

export default SigninContainer;
