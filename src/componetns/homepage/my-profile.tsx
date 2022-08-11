import Avatar from 'componetns/commones/avatar';
import CustomeCard from 'componetns/commones/custome-card';
import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const MyProfile = () => {
  return (
    <CustomeCard>
      <Card.Header className="bg-white ps-0 border-0 mt-2 ms-4">
        <Avatar title="yared tsegaye" subtitle="Photographer" isonline md />
      </Card.Header>
      <Card.Body className="my-4">
        <div className="d-flex justify-content-evenly border-top border-bottom">
          <div className="follower-card d-flex flex-column w-100 border-end py-4 align-items-center">
            <Link to="" className="text-decoration-none">
              <span className="fw-bold fs-4 color-theme text-decoration-none">298</span>
            </Link>
            <span className="text-muted fs-4 mt-2">Followers</span>
          </div>
          <div className="follower-card d-flex flex-column w-100 py-4 align-items-center">
            <Link to="" className="text-decoration-none">
              <span className="fw-bold fs-4 color-theme text-decoration-none">298</span>
            </Link>
            <span className="text-muted fs-4 mt-2">Followers</span>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="border-0 bg-white pt-4">
        <div className="d-flex justify-content-center">
          <Link to="" className="fw-bold fs-4 text-decoration-none">
            View My Profile
          </Link>
        </div>
      </Card.Footer>
    </CustomeCard>
  );
};

export default MyProfile;
