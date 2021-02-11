import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardTitle,
  Col,
} from "reactstrap";

const UserComponent = (props) => {
  const { id, email, first_name, last_name, avatar } = props;
  return (
    <Fragment>
      <Col xs="3" className="mt-3">
        <Link to={`/users/${id}`}>
          <Card key={id}>
            <CardImg
              top
              width="150px"
              height="200px"
              src={avatar}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">{first_name + last_name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {email}
              </CardSubtitle>
            </CardBody>
          </Card>
        </Link>
      </Col>
    </Fragment>
  );
};

export default UserComponent;
