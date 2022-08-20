import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

import {RiDashboardLine} from 'react-icons/ri';
import {MdOutlineHome} from 'react-icons/md';
import {IoIosNotificationsOutline} from 'react-icons/io';

//

const MobileNavBar = () => {
  return (
    <Navbar fixed="bottom" bg="light" expand="lg" className="bg-white shadow-lg mobile-nav">
      <Nav className="d-flex justify-content-evenly flex-direction-column flex-row  vw-100">
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
    </Navbar>
  );
};

export default MobileNavBar;
