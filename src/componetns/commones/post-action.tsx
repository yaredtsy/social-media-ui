import React from 'react';
import {Button, Card, FloatingLabel, Form} from 'react-bootstrap';
import {RiImageAddLine, RiVideoAddFill} from 'react-icons/ri';

import Avatar from './avatar';
import CustomeCard from './custome-card';

const PostAction = () => {
  return (
    <CustomeCard>
      <Card.Body>
        <div className="d-flex">
          <div>
            <Avatar />
          </div>
          <div className="w-100">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control as="textarea" placeholder="Leave a comment here" style={{height: '100px'}} />
            </FloatingLabel>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="bg-white ">
        <div className="d-flex justify-content-evenly mt-4">
          <Button className="w-100 rounded-pill  mx-3 py-3 fs-5 d-flex justify-content-center align-items-center">
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
