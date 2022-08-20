import React from 'react';

import NavBar from 'componetns/nav-bar/nav-bar';
import {Outlet} from 'react-router-dom';
import MobileNavBar from 'componetns/nav-bar/mobile-nav-bar';

const MasterLayout = ({...props}) => {
  return (
    <>
      <header className="sticky-top">
        <NavBar />
      </header>
      <main className="mt-5">
        <Outlet />
      </main>
      <footer>
        <MobileNavBar />
      </footer>
    </>
  );
};

export default MasterLayout;
