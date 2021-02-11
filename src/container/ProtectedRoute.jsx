import { Redirect, Route } from "react-router-dom";

function ProtectedRoute(props) {
  const { isAuth, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
