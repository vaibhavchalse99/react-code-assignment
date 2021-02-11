import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Jumbotron, Row } from "reactstrap";

import {
  userProfileReducer,
  initialValue,
} from "../reducer/userProfileReducer";
import { GET_USER_PROFILE } from "../helpers/stringHelper";
import UserProfileComponent from "../component/UserProfileComponent";

const UserProfileContainer = () => {
  const { id } = useParams();
  const [userState, dispatch] = useReducer(userProfileReducer, initialValue);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        console.log(response);
        const { status, data } = response;
        if (status === 200) {
          const { data: user } = data;
          dispatch({
            type: GET_USER_PROFILE,
            payload: { user, error: "", loading: false },
          });
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const { id: userId, email, first_name, last_name, avatar } = userState.user;

  return (
    <>
      {userState.loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h2 className="text-center">User Profile</h2>
          <Jumbotron
            style={{ backgroundColor: "#73d5ff", border: "2px solid #1d6685" }}
          >
            <Row>
              <UserProfileComponent
                id={userId}
                email={email}
                first_name={first_name}
                last_name={last_name}
                avatar={avatar}
              />
            </Row>
          </Jumbotron>
        </>
      )}
    </>
  );
};

export default UserProfileContainer;
