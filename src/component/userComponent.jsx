import { Fragment } from "react";
import { Card, CardBody, CardSubtitle, CardImg, CardTitle } from "reactstrap";

const UserComponent = (props) => {
  const { id, email, first_name, last_name, avatar } = props;
  return (
    <Fragment>
      <Card key={id}>
        <CardImg
          top
          width="150px"
          height="150px"
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
    </Fragment>
  );
};

export default UserComponent;
