import React from 'react';
import logo from './assets/images/logo-medine.png';


export default
function LogoType(): JSX.Element {
  return (
        <a className="navbar-brand" href="#">
          <img src={logo} className="logo-nav" alt="logo" />
        </a>
  );
}

