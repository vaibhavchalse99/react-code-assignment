import React, { useState } from "react";
import { Container } from "reactstrap";
import { useHistory } from "react-router-dom";

import MainComponent from "../component/mainComponent";
import authContext from "./authContext";

function MainContainer() {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();
  const setState = () => {
    setAuthenticated(false);
  };

  const handleClick = () => {
    history.push("/account/signin");
  };
  const renderLoginButton = () => {
    if (authenticated) {
      return <button onClick={setState}>Logout</button>;
    } else {
      return <button onClick={handleClick}>Login</button>;
    }
  };
  return (
    <Container className="themed-container">
      <authContext.Provider value={{ authenticated, setAuthenticated }}>
        <div style={{ font: 50 }}>
          user is {`${authenticated ? "" : "not"} authenticated`}{" "}
        </div>
        {renderLoginButton()}
        <MainComponent />
      </authContext.Provider>
    </Container>
  );
}

export default MainContainer;
