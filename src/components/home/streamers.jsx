import React from 'react';
import { Link } from 'react-router-dom';

function streamers() {
  const avatars = () => {
    const url = 'https://placeimg.com/40/40/people?';
    const img = [];
    for (let i = 1; i < 11; i++) {
      img.push(<img className='streamers__img' src={url + i} key={url + i} alt='avatar' />);
    }
    return img;
  };

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
      <div className='sreamers__avatar'>
        {avatars().map((item, index) => (
          <Link to={'streamer' + index}>{item}</Link>
        ))}
      </div>
    </div>
  );
}

export default streamers;
