import React from 'react';
import { Link } from 'react-router-dom';

export const Avatars = () => {
  const avatar = () => {
    const url = 'https://placeimg.com/40/40/people?';
    const img = [];
    for (let i = 1; i < 12; i++) {
      img.push(<img className='streamers__img' src={url + i} key={url + i} alt='avatar' />);
    }
    return img;
  };
  return (
    <div className='sreamers__avatar'>
      {avatar().map((item, index) => (
        <Link className='streamers__link' to={'/streamer/id' + (index + 1)}>
          {item}
        </Link>
      ))}
    </div>
  );
};
