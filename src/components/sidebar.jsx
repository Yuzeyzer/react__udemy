import React, { useState } from 'react';
import logo from '../assets/svg/logo.svg';

function Sidebar() {
  const menuItems = [
    { menu__label: 'Home', path: '/', icon: 'icon-home' },
    { menu__label: 'Discover', path: 'dicover', icon: 'icon-ul' },
    { menu__label: 'Categories', path: 'categories', icon: 'icon-tag' },
    { menu__label: 'My Courses', path: 'my-courses', icon: 'icon-briefcase' },
  ];

  const [menuItemsActive, setMenuItemsActive] = useState(0);

  const setActive = (index) => {
		setMenuItemsActive(index);
  };

  return (
    <div className='sidebar fixed'>
      <div className='sidebar__logo logo'>
        <a href='index.html' className='logo__link'>
          <img src={logo} alt='logo' />
        </a>
      </div>
      <div className='sidebar__nav'>
        <ul className='sidebar__menu menu'>
          {menuItems &&
            menuItems.map((item, index) => (
              <li
                className={'menu__items'}
                onClick={() => setActive(index)}
                key={item.menu__label}>
                <a className={`menu__links ${menuItemsActive === index ? 'active' : ''}`} href={item.path}>
                  <i className={'menu__icons ' + item.icon}></i>
                  <span className='menu__label'>{item.menu__label}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;