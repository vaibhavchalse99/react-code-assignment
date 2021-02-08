import { Switch, Redirect, Route } from "react-router-dom";

import SigninContainer from "../container/SigninContainer";
import UserContainer from "../container/UserContainer";
import HomeComponent from "./HomeComponent";

const mainComponent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/account/signin" component={SigninContainer} />
        <Route exact path="/users" component={UserContainer} />
        <Route exact path="/" component={HomeComponent} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default mainComponent;
