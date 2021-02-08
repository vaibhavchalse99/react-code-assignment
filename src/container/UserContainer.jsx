import { Fragment, useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import authContext from "../container/authContext";
import UserComponent from "../component/UserComponent";
import { Row } from "reactstrap";

const UserContainer = () => {
  const { authenticated } = useContext(authContext);
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        console.log(response);
        const { status, data } = response;
        if (status === 200) {
          const { data: usersData } = data;
          setUser(usersData);
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  if (!authenticated) {
    return <Redirect to="/account/signin" />;
  }

  return (
    <Fragment>
      <h1>this is user component</h1>
      <Row>
        {users.map((ele) => {
          const { id, email, first_name, last_name, avatar } = ele;
          return (
            <UserComponent
              id={id}
              email={email}
              first_name={first_name}
              last_name={last_name}
              avatar={avatar}
            />
          );
        })}
      </Row>
    </Fragment>
  );
};

export default UserContainer;
