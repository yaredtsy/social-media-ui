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
      <Row className="gx-2 gx-lg-4  ">
        <Col xl={3} lg={4} md={0} className="disable-md">
          <MyProfile />
          <Following />
        </Col>
        <Col xl={6} lg={8} md={12} className=" mb-6">
          <PostAction />
          <PostDisplay />
          <PostDisplay />
          <PostDisplay />
        </Col>
        <Col xl={3} lg={3} className="disable-lg">
          <TopTranding />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
