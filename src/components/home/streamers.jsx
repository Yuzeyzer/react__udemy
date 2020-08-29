import React from 'react';
import { Avatars } from './consts';

function streamers() {
  return (
    <div className='col-7'>
      <div className='streamers__info flex-space-between'>
        <h3 className='streamers__title'>
          Streaming <span className='font-light'>Now</span>
        </h3>
        <button className='streamers__more'>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </button>
      </div>
      <Avatars />
    </div>
  );
}

export default streamers;
