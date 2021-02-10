import React from "react";
import { CardImg, Col, Row } from "reactstrap";

function UserProfileComponent(props) {
  const { id, email, first_name, last_name, avatar } = props;
  return (
    <>
      <Col xs="2"></Col>
      <Col xs="3">
        <CardImg
          top
          width="300px"
          height="200px"
          src={avatar}
          alt="Card image cap"
        />
      </Col>
      <Col xs="2"></Col>
      <Col className="font-weight-bold">
        <br />
        <Row>{`PID - ${id}`}</Row>
        <Row>{`${first_name} ${last_name}`}</Row>
        <Row>{email}</Row>
      </Col>
    </>
  );
}

export default UserProfileComponent;
