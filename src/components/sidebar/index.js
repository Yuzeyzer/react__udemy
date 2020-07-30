import React from 'react';

import Logo from './logo';
import Nav from './nav';
import UpdatedCourse from './updatedCourse';
import Stats from './stats';

const Index = () => {
  return (
    <div className='sidebar'>
      <Logo />
      <Nav />
      <UpdatedCourse />
      <Stats />
    </div>
  );
};

export default Index;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/svg/logo.svg';
// import avatar from '../../assets/images/1.png';

// function Index() {
//   const menuItems = [
//     { menu__label: 'Home', path: '/', icon: 'icon-home' },
//     { menu__label: 'Discover', path: 'dicover', icon: 'icon-search' },
//     { menu__label: 'Categories', path: 'categories', icon: 'icon-tag' },
//     { menu__label: 'My Courses', path: 'my-courses', icon: 'icon-briefcase' },
//   ];

//   const [menuItemsActive, setMenuItemsActive] = useState(0);

//   const setActive = (index) => {
//     setMenuItemsActive(index);
//   };

//   return (
//     <div className='sidebar'>
//       <div className='sidebar__logo logo'>
//         <Link to='index.html' className='logo__link'>
//           <img src={logo} alt='logo' />
//         </Link>
//       </div>
//       <div className='sidebar__nav nav'>
//         <ul className='sidebar__menu menu'>
//           {menuItems &&
//             menuItems.map((item, index) => (
//               <li className={'menu__items'} onClick={() => setActive(index)} key={item.menu__label}>
//                 <Link
//                   className={`menu__links ${menuItemsActive === index ? 'active' : ''}`}
//                   to={item.path}>
//                   <i className={'menu__icons ' + item.icon}></i>
//                   <span className='menu__label'>{item.menu__label}</span>
//                 </Link>
//               </li>
//             ))}
//         </ul>
//       </div>
//       <div className='sidebar__updated updated'>
//         <i className='updated__icon icon-lamp-bright icon'></i>
//         <div className='updated__info'>
//           <h3 className='updated__title'>Updated Course</h3>
//           <span className='updated__author'>by skarlatus</span>
//         </div>
//       </div>
//       <div className='sidebar__stats stats'>
//         <div className='stats__points col-6'>
//           <div className='stats__item'>
//             <i className='icon-bookmark icon green'></i>
//             <div className='stats__info'>
//               <h3 className='stats__number'>1800</h3>
//               <span className='stats__type'>points</span>
//             </div>
//           </div>
//         </div>
//         <div className='stats__points col-6'>
//           <div className='stats__item'>
//             <i className='icon-power icon pink'></i>
//             <div className='stats__info'>
//               <h3 className='stats__number'>45.3%</h3>
//               <span className='stats__type'>points</span>
//             </div>
//           </div>
//         </div>
//         <div className='stats__points stats__author col-12'>
//           <div className='stats__item'>
//             <div className='stats__avatar'>
//               <img src={avatar} alt='' />
//             </div>
//             <div className='stats__info'>
//               <h3 className='stats__name'>Alex Dicon</h3>
//               <span className='stats__nickname'>@alexlearns</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Index;
