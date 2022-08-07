import Avatar from 'componetns/commones/avatar';
import CustomeCard from 'componetns/commones/custome-card';
import MasterLayout from 'componetns/Layout/master-layout';
import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>
      <Row className="gx-5">
        <Col lg={3}>
          <CustomeCard>
            <Card.Header className="bg-white">
              <Avatar title="hello" subtitle="ds" isonline />
            </Card.Header>
          </CustomeCard>
        </Col>
        <Col lg={6}>
          {' '}
          <CustomeCard>olla </CustomeCard>
        </Col>
        <Col lg={3}>
          {' '}
          <CustomeCard>yow </CustomeCard>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
