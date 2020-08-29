import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './consts';

function Nav() {
  const [menuItemsActive, setMenuItemsActive] = useState(0);
  const setActive = (index) => setMenuItemsActive(index);
  return (
    <div className='sidebar__nav nav'>
      <ul className='sidebar__menu menu'>
        <MenuItems menuItemsActive={menuItemsActive} setActive={setActive} />
      </ul>
    </div>
  );
}

export default Nav;
