import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

import CustomeCard from 'componetns/commones/custome-card';
import MyProfile from 'componetns/homepage/my-profile';

const HomePage = () => {
  return (
    <Container>
      <Row className="gx-5">
        <Col lg={3}>
          <MyProfile />
        </Col>
        <Col lg={6}>
          {' '}
          <CustomeCard>olla </CustomeCard>
        </Col>
        <Col lg={3}>
          <CustomeCard>yow </CustomeCard>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
