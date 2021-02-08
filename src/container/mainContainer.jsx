import React, { useState } from "react";
import { Nav, NavItem, Button } from "reactstrap";
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
      return <Button onClick={setState}>Logout</Button>;
    } else {
      return <Button onClick={handleClick}>Login</Button>;
    }
  };
  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
      <Nav className="mt-5">
        <NavItem className="h3">{renderLoginButton()}</NavItem>
      </Nav>
      <MainComponent />
    </authContext.Provider>
  );
}

export default MainContainer;
