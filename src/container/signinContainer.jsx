import { Fragment, useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import authContext from "./authContext";

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
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Email</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </Fragment>
  );
};

export default SigninContainer;
