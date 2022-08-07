import React from 'react'

import NavBar from 'componetns/nav-bar/nav-bar'


const MasterLayout = ({...props}) => {
  return (
    <div>
        <header>
            <NavBar />
        </header>
        <main></main>
        <footer></footer>
    </div>
  )
}

export default MasterLayout