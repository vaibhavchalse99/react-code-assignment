import { Form, FormGroup, Label, Button, FormFeedback } from "reactstrap";

import InputComponent from "./InputComponent";

import "../css/form.css";

const SigninComponent = (props) => {
  const {
    loginState,
    handleSubmit,
    handleEmailInput,
    handlePasswordInput,
  } = props;

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <h1 className="font-weight-bold text-center">Login</h1>
      <FormGroup className="mt-3">
        <Label>Email</Label>
        <InputComponent
          type="text"
          value={loginState.email}
          handleInput={handleEmailInput}
          error={loginState.emailError}
        />
        <FormFeedback>{loginState.emailError}</FormFeedback>
      </FormGroup>
      <FormGroup className="mt-3">
        <Label>Password</Label>
        <InputComponent
          type="password"
          value={loginState.password}
          handleInput={handlePasswordInput}
          error={loginState.passwordError}
        />
        <FormFeedback>{loginState.passwordError}</FormFeedback>
      </FormGroup>
      <FormGroup className="mt-5">
        <Button className="btn-block btn-lg btn-dark form-button">
          Sign in
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SigninComponent;
