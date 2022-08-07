import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {RiDashboardLine} from 'react-icons/ri';
import {GrHome} from 'react-icons/gr';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="bg-white shadow-sm">
      <Container fluid>
        <Navbar.Brand href="">
          <div className="nav-logo"></div>
        </Navbar.Brand>
        <Nav className="me-auto ms-auto">
          <Nav.Link>
            <GrHome />
          </Nav.Link>
          <Nav.Link href="#action1">
            <RiDashboardLine />
          </Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
        </Nav>
        <Nav className="">
          <Nav.Link href="#action1">Home2</Nav.Link>
          <Nav.Link href="#action2">Link3</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
