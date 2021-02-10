import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SigninContainer from "../container/SigninContainer";
import UserContainer from "../container/UserContainer";
import HomeComponent from "./HomeComponent";
import ProtectedRoute from "../container/ProtectedRoute";
import UserProfileContainer from "../container/UserProfileContainer";

import authContext from "../context/authContext";

const MainComponent = () => {
  const { authenticated } = useContext(authContext);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/account/signin" component={SigninContainer} />
        <ProtectedRoute
          exact
          path="/users"
          component={UserContainer}
          isAuth={authenticated}
        />
        <ProtectedRoute
          path="/users/:id"
          component={UserProfileContainer}
          isAuth={authenticated}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default MainComponent;
