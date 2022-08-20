import React from 'react';

import {BsThreeDotsVertical} from 'react-icons/bs';

import {Button, Card, Image} from 'react-bootstrap';
import {BsHeart, BsHeartFill} from 'react-icons/bs';

import {FiMessageSquare} from 'react-icons/fi';
import {RiShareForwardLine} from 'react-icons/ri';

//
import CustomeCard from 'componetns/commones/custome-card';
import Avatar from './avatar';
import postImage from 'assets/images/pic1.png';
import AmountCard from './amount-card';

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
      <Card.Footer className="bg-white border-0 px-0">
        <div className="d-flex">
          {/* <div className="d-flex justify-content-center align-items-center mx-2 text-muted">
            <BsHeart className="fs-3" />
            <span className="fs-5 ms-1"> 16 Likes</span>
          </div> */}

          <div className="d-flex justify-content-center align-items-center mx-2 color-theme">
            <BsHeartFill className="fs-3" />
            <span className="fs-5 ms-1"> 16 Likes</span>
          </div>
          <div className="d-flex justify-content-center align-items-center mx-2 text-muted">
            <FiMessageSquare className="fs-3" />
            <span className="fs-5 ms-1">13 Supps</span>
          </div>
          <div className="d-flex justify-content-center align-items-center mx-2 text-muted">
            <RiShareForwardLine className="fs-3" />
            <span className="fs-5 ms-1">Share</span>
          </div>
          <div className="ms-auto">
            <AmountCard />
          </div>
        </div>
      </Card.Footer>
    </CustomeCard>
  );
};

export default PostDisplay;
