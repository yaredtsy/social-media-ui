import React from 'react';
import {Container, Form, InputGroup, Nav, Navbar} from 'react-bootstrap';
import {RiDashboardLine} from 'react-icons/ri';
import {MdOutlineHome} from 'react-icons/md';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {ReactSearchAutocomplete} from 'react-search-autocomplete';

//custom

import AmountCard from 'componetns/commones/amount-card';
import Avatar from 'componetns/commones/avatar';

const NavBar = () => {
  return (
    <Navbar sticky="top" bg="light" expand="lg" className="bg-white shadow-sm">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex flex-row">
          <Navbar.Brand href="">
            <div className="nav-logo"></div>
          </Navbar.Brand>
          <div className="search my-2">
            <ReactSearchAutocomplete
              items={[]}
              onSearch={() => {}}
              onHover={() => {}}
              onSelect={() => {}}
              onFocus={() => {}}
            />
          </div>
        </Nav>

        <Nav className="desktop-icons">
          <Nav.Link className="me-5">
            <MdOutlineHome className="nav-icons active" />
          </Nav.Link>
          <Nav.Link>
            <RiDashboardLine className="nav-icons" />
          </Nav.Link>
          <Nav.Link className="ms-5">
            <div className="notification">
              <IoIosNotificationsOutline className="nav-icons " />
              <span></span>
            </div>
          </Nav.Link>
        </Nav>
        <Nav className="me-5 profile d-flex flex-row">
          <div className="ms-auto me-3 my-auto">
            <AmountCard />
          </div>
          <Nav.Link href="#action2">
            <Avatar />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
