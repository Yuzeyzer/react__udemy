import React from 'react';
import { Link } from 'react-router-dom';
export const MenuItems = ({ menuItemsActive, setActive }) => {
  const menuItems = [
    { menu__label: 'Home', path: '/', icon: 'icon-home' },
    { menu__label: 'Discover', path: 'dicover', icon: 'icon-search' },
    { menu__label: 'Categories', path: 'categories', icon: 'icon-tag' },
    { menu__label: 'My Courses', path: 'my-courses', icon: 'icon-briefcase' },
  ];
  return (
    menuItems &&
    menuItems.map((item, index) => (
      <li className={'menu__items'} onClick={() => setActive(index)} key={item.menu__label}>
        <Link className={`menu__links ${menuItemsActive === index ? 'active' : ''}`} to={item.path}>
          <i className={'menu__icons ' + item.icon}></i>
          <span className='menu__label'>{item.menu__label}</span>
        </Link>
      </li>
    ))
  );
};
