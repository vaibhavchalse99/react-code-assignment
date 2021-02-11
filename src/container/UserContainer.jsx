import { useEffect, useReducer } from "react";
import axios from "axios";
import { Row } from "reactstrap";

import UserComponent from "../component/UserComponent";
import { userReducer, initialValue } from "../reducer/userReducer";
import { GET_USERS } from "../helpers/stringHelper";

const UserContainer = () => {
  const [usersState, dispatch] = useReducer(userReducer, initialValue);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        console.log(response);
        const { status, data } = response;
        if (status === 200) {
          const { data: users } = data;
          dispatch({
            type: GET_USERS,
            payload: { users, error: "", loading: false },
          });
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <>
      {usersState.loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>this is user component</h1>
          <Row>
            {usersState.users.map((ele) => {
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
        </>
      )}
    </>
  );
};

export default UserContainer;
