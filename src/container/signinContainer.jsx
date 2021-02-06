import { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import authContext from "./authContext";
import { Form, FormGroup, Input, Label, Button, Row } from "reactstrap";

const SigninContainer = () => {
  const history = useHistory();
  const { setAuthenticated } = useContext(authContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", { email: username, password })
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

  return (
    <div>
      <Row className={"justify-content-center"}>
        <h2>Login Page</h2>
      </Row>
      <Row className={"d-flex justify-content-center"}>
        <div
          style={{
            position: "relative",
            width: "50%",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <div className="text-center">
              <Button color="primary">Submit</Button>
            </div>
          </Form>
        </div>
      </Row>
    </div>
  );
};

export default SigninContainer;
