import { BrowserRouter } from "react-router-dom";

import Main from "./container/mainContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
