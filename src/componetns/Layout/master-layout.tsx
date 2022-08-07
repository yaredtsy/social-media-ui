import React from 'react';

import NavBar from 'componetns/nav-bar/nav-bar';
import {Outlet} from 'react-router-dom';

const MasterLayout = ({...props}) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="mt-5">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default MasterLayout;
