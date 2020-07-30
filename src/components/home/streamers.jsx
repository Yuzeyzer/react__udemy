import React from 'react';

function streamers() {
  return (
    <div className='col-7'>
      <div className='streamers__info flex-space-between'>
        <h3 className='streamers__title'>Streaming Now</h3>
        <button className='streamers__more'>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </button>
      </div>
    </div>
  );
}

export default streamers;
