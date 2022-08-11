import React from 'react';
import {Card} from 'react-bootstrap';

import Avatar from 'componetns/commones/avatar';
import CustomeCard from 'componetns/commones/custome-card';

const TopTranding = () => {
  return (
    <CustomeCard>
      <Card.Header className="bg-white ps-0 border-0 mt-2 ms-4 fw-bold fs-4">Top Tranding</Card.Header>
      <Card.Body>
        <div className="d-flex flex-column">
          <Avatar title="Tolwak glan" className="my-3" showFollower showFollowing />
          <Avatar title="Kristy james" className="my-3" showFollower showFollowing />
          <Avatar title="Mikel Scott" className="my-3" showFollower showFollowing />
          <Avatar title="Jimme Halbert" className="my-3" showFollower showFollowing />
        </div>
      </Card.Body>
    </CustomeCard>
  );
};

export default TopTranding;
