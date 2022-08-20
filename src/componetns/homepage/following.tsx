import Avatar from 'componetns/commones/avatar';
import CustomeCard from 'componetns/commones/custome-card';
import React from 'react';
import {Card} from 'react-bootstrap';

const Following = () => {
  return (
    <CustomeCard className="mt-5">
      <Card.Header className="bg-white ps-0 border-0 mt-2 ms-4 fw-bold fs-4">Following</Card.Header>
      <Card.Body>
        <div className="d-flex flex-column">
          <Avatar title="Tolwak glan" className="my-3" showFollower isonline />
          <Avatar title="Kristy james" className="my-3" showFollower />
          <Avatar title="Mikel Scott" className="my-3" showFollower isonline />
          <Avatar title="Jimme Halbert" className="my-3" showFollower />
        </div>
      </Card.Body>
    </CustomeCard>
  );
};

export default Following;
