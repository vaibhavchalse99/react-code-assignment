import React, { useState } from "react";
import { Container } from "reactstrap";

import MainComponent from "../component/mainComponent";
import authContext from "./authContext";

function MainContainer() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Container className="themed-container">
      <authContext.Provider value={{ authenticated, setAuthenticated }}>
        <div> user is {`${authenticated ? "" : "not"} authenticated`} </div>
        <MainComponent />
      </authContext.Provider>
    </Container>
  );
}

export default MainContainer;
