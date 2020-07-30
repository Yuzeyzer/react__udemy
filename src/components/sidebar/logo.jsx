import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/svg/logo.svg';

function Logo() {
  return (
    <div className='sidebar__logo logo'>
      <Link to='index.html' className='logo__link'>
        <img src={logo} alt='logo' />
      </Link>
    </div>
  );
}

export default Logo;
