import React from 'react';

import {BsThreeDotsVertical} from 'react-icons/bs';

import CustomeCard from 'componetns/commones/custome-card';
import {Button, Card, Image} from 'react-bootstrap';
import Avatar from './avatar';

import postImage from 'assets/images/pic1.png';

const PostDisplay = () => {
  return (
    <CustomeCard className="my-lg-5 my-3">
      <Card.Header className="bg-white ps-0 border-0 mt-2">
        <div className="d-flex justify-content-between align-items-center">
          <Avatar title="Yared karen" subtitle="@karen - 2h ago" />
          <Button variant="light" className="rounded-circle">
            <BsThreeDotsVertical className="fs-2 text-muted" />
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="mb-4 fs-5">
          lorem ipsum dolor sit amet, consectetur allowSyntheticDefaultImports Lorem ipsum dolor sit amet consectetur
        </div>
        <div className="post-container my-3">
          <Image src={postImage} alt="" className="" fluid />
        </div>
      </Card.Body>
      <Card.Footer className="bg-white border-0 ">
        <div className="d-flex">
          <div>Likes</div>
          <div>Supps</div>
          <div>Share</div>
          <div className="ms-auto">don</div>
        </div>
      </Card.Footer>
    </CustomeCard>
  );
};

export default PostDisplay;
