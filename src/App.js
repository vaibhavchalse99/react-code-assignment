import { BrowserRouter } from "react-router-dom";

import Main from "./container/MainContainer";
import { Container } from "reactstrap";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Container>
  );
}

export default App;
