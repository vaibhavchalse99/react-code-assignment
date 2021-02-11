import React from "react";
import { Form, FormGroup, Label, Button, FormFeedback } from "reactstrap";

import InputComponent from "./InputComponent";

import "../css/form.css";

const SigninComponent = (props) => {
  console.log("Sign in component");
  const {
    loginState,
    handleSubmit,
    handleEmailInput,
    handlePasswordInput,
  } = props;

  const { email, emailError, password, passwordError } = loginState;

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <h1 className="font-weight-bold text-center">Login</h1>
      <FormGroup className="mt-3">
        <Label>Email</Label>
        <InputComponent
          type="text"
          value={email}
          handleInput={handleEmailInput}
          error={emailError}
        />
        <FormFeedback>{emailError}</FormFeedback>
      </FormGroup>
      <FormGroup className="mt-3">
        <Label>Password</Label>
        <InputComponent
          type="password"
          value={password}
          handleInput={handlePasswordInput}
          error={passwordError}
        />
        <FormFeedback>{passwordError}</FormFeedback>
      </FormGroup>
      <FormGroup className="mt-5">
        <Button className="btn-block btn-lg btn-dark form-button">
          Sign in
        </Button>
      </FormGroup>
    </Form>
  );
};

export default React.memo(SigninComponent);
