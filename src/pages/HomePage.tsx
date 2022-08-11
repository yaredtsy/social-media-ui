import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import MyProfile from 'componetns/homepage/my-profile';
import PostAction from 'componetns/commones/post-action';

import TopTranding from 'componetns/homepage/top-tranding';
import PostDisplay from 'componetns/commones/post-display';
import Following from 'componetns/homepage/following';

const HomePage = () => {
  return (
    <Container>
      <Row className="gx-5">
        <Col lg={3} className="">
          <MyProfile />
          <Following />
        </Col>
        <Col xl={6} lg={5} className="">
          <PostAction />
          <PostDisplay />
        </Col>
        <Col xl={3} lg={4} className="">
          <TopTranding />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
