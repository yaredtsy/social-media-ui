import React from 'react';
import {Button, Card, FloatingLabel, Form} from 'react-bootstrap';
import {RiImageAddLine, RiVideoAddFill} from 'react-icons/ri';

import Avatar from './avatar';
import CustomeCard from './custome-card';

const PostAction = () => {
  return (
    <CustomeCard>
      <Card.Body className="m-0">
        <div className="d-flex ">
          <div>
            <Avatar md />
          </div>
          <div className="w-100 ps-3">
            <Form.Control as="textarea" placeholder="Say something...." className="post-text  p-3 border-theme" />
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="bg-white  border-theme">
        <div className="d-flex justify-content-evenly mt-4 flex-lg-column flex-md-column flex-column  flex-xl-row">
          <Button className="w-100 rounded-pill  mx-3 py-3 fs-5 d-flex justify-content-center align-items-center mb-3 mb-xl-0">
            <RiImageAddLine className="fs-3 me-3" />
            <span>Upload Image</span>
          </Button>

          <Button className="w-100 rounded-pill  mx-3 py-3 fs-5 d-flex justify-content-center align-items-center bg-white upload-video-btn">
            <RiVideoAddFill className="fs-3 me-3 " />
            <span>Upload Video</span>
          </Button>
        </div>
      </Card.Footer>
    </CustomeCard>
  );
};

export default PostAction;
