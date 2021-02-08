import { useState, useContext, Fragment, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

import authContext from "./authContext";
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
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    console.log(err);

    setError(err);
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [error]);

  const validate = async () => {
    try {
      await schema.validate(formValues, { abortEarly: false });
      return {};
    } catch (err) {
      let e = {};
      for (let { path, message } of err.inner) {
        e[path] = message;
      }
      return e;
    }
  };

  return (
    <Fragment>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="font-weight-bold text-center">Login</h1>
        <FormGroup className="mt-3">
          <Label>Email</Label>
          <Input
            style={{ border: error.email ? "2px solid red" : "" }}
            type="text"
            value={formValues.email}
            onChange={(e) =>
              serFormValues({ ...formValues, email: e.target.value })
            }
            placeholder="example@gmail.com"
          />
          {error.email ? <p className="text-danger">{error.email}</p> : ""}
        </FormGroup>
        <FormGroup className="mt-3">
          <Label>Password</Label>
          <Input
            style={{ border: error.password ? "2px solid red" : "" }}
            type="password"
            value={formValues.password}
            onChange={(e) =>
              serFormValues({ ...formValues, password: e.target.value })
            }
            placeholder="abc@1234"
          />
          {error.password ? (
            <p className="text-danger">{error.password}</p>
          ) : (
            ""
          )}
        </FormGroup>
        <FormGroup className="mt-5">
          <Button className="btn-block btn-lg btn-dark form-button">
            Sign in
          </Button>
        </FormGroup>
      </Form>
    </Fragment>
  );
};

export default SigninContainer;
