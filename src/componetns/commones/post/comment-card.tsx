import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {BsThreeDotsVertical} from 'react-icons/bs';

import Avatar from '../avatar';
import CustomeCard from '../custome-card';

function CommentCard() {
  return (
    <CustomeCard className="bg-color-theme">
      <Card.Header className="border-0 p-0">
        <div className="d-flex justify-content-between align-items-center">
          <Avatar title="Yared karen" className="bg-color-theme text-white" />
          <div className="">
            <Button variant="light" className="rounded-circle bg-color-theme text-white border-0">
              <BsThreeDotsVertical className="fs-5 fw-bold" />
            </Button>
          </div>
        </div>
      </Card.Header>
      <Card.Body className="border-0 p-0 py-1 py-lg-3">
        <p className="text-light fw-light fs-5 mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga nesciunt excepturi, repellendus eum
          necessitatibus pariatur beatae ipsa labore odio fugit voluptatum! Quaerat rem minima nisi corrupti iste
          consequatur odio!{' '}
        </p>
      </Card.Body>
      <Card.Footer className="border-0 p-0 bg-white bg-color-theme">
        <div className="d-flex align-items-center">
          <span className="text-white fw-bold fs-5">2h</span>
          <span className="text-white fw-bold fs-5 mx-2">-</span>
          <Button className="bg-color-theme text-white border-0 fs-5 fw-bold " variant="light">
            Replay
          </Button>
        </div>
      </Card.Footer>
    </CustomeCard>
  );
}

export default CommentCard;
