import React from 'react';

import Streamers from './streamers';

function hero() {
  return (
    <section className='home'>
      <div className='home__container'>
        <Streamers />
      </div>
    </section>
  );
}

export default hero;
