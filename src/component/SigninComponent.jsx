import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormFeedback,
} from "reactstrap";

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
        <Input
          type="text"
          value={loginState.email}
          onChange={(e) => {
            handleEmailInput(e);
          }}
          placeholder="example@gmail.com"
          invalid={loginState.emailError !== ""}
        />
        <FormFeedback>{loginState.emailError}</FormFeedback>
      </FormGroup>
      <FormGroup className="mt-3">
        <Label>Password</Label>
        <Input
          type="password"
          value={loginState.password}
          onChange={(e) => {
            handlePasswordInput(e);
          }}
          placeholder="abc@1234"
          invalid={loginState.passwordError !== ""}
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
