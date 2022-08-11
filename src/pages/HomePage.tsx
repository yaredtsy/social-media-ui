import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import MyProfile from 'componetns/homepage/my-profile';
import PostAction from 'componetns/commones/post-action';

import TopTranding from 'componetns/homepage/top-tranding';
import PostDisplay from 'componetns/commones/post-display';

const HomePage = () => {
  return (
    <Container>
      <Row className="gx-5">
        <Col lg={3}>
          <MyProfile />
        </Col>
        <Col lg={6}>
          <PostAction />
          <PostDisplay />
        </Col>
        <Col lg={3}>
          <TopTranding />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
