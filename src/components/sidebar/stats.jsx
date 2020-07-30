import React from 'react';

import avatar from '../../assets/images/1.png';

function Stats() {
  return (
    <div className='sidebar__stats stats'>
      <div className='stats__points col-6'>
        <div className='stats__item'>
          <i className='icon-bookmark icon green'></i>
          <div className='stats__info'>
            <h3 className='stats__number'>1800</h3>
            <span className='stats__type'>points</span>
          </div>
        </div>
      </div>
      <div className='stats__points col-6'>
        <div className='stats__item'>
          <i className='icon-power icon pink'></i>
          <div className='stats__info'>
            <h3 className='stats__number'>45.3%</h3>
            <span className='stats__type'>points</span>
          </div>
        </div>
      </div>
      <div className='stats__points stats__author col-12'>
        <div className='stats__item'>
          <div className='stats__avatar'>
            <img src={avatar} alt='' />
          </div>
          <div className='stats__info'>
            <h3 className='stats__name'>Alex Dicon</h3>
            <span className='stats__nickname'>@alexlearns</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
