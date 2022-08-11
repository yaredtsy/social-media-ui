import React from 'react';

import {BsThreeDotsVertical} from 'react-icons/bs';

import CustomeCard from 'componetns/commones/custome-card';
import {Button, Card, Image} from 'react-bootstrap';
import Avatar from './avatar';

import postImage from 'assets/images/pic1.png';

const PostDisplay = () => {
  return (
    <CustomeCard className="my-4">
      <Card.Header className="bg-white ps-0 border-0 mt-2 ms-4">
        <div className="d-flex justify-content-between align-items-center mx-3">
          <Avatar title="Yared karen" subtitle="@karen - 2h ago" />
          <Button variant="light" className="rounded-circle">
            <BsThreeDotsVertical className="fs-2 text-muted" />
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <div>
          <Image src={postImage} alt="" className="" fluid />
        </div>
      </Card.Body>
    </CustomeCard>
  );
};

export default PostDisplay;
