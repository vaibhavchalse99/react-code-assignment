import { Fragment } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

import "../css/form.css";

const SigninComponent = (props) => {
  const {
    handleSubmit,
    formError,
    formValues,
    handleEmailInput,
    handlePasswordInput,
  } = props;

  return (
    <Fragment>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h1 className="font-weight-bold text-center">Login</h1>
        <FormGroup className="mt-3">
          <Label>Email</Label>
          <Input
            style={{ border: formError.email ? "2px solid red" : "" }}
            type="text"
            value={formValues.email}
            onChange={(e) => {
              handleEmailInput(e);
            }}
            placeholder="example@gmail.com"
          />
          {formError.email ? (
            <p className="text-danger">{formError.email}</p>
          ) : (
            ""
          )}
        </FormGroup>
        <FormGroup className="mt-3">
          <Label>Password</Label>
          <Input
            style={{ border: formError.password ? "2px solid red" : "" }}
            type="password"
            value={formValues.password}
            onChange={(e) => {
              handlePasswordInput(e);
            }}
            placeholder="abc@1234"
          />
          {formError.password ? (
            <p className="text-danger">{formError.password}</p>
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

export default SigninComponent;
