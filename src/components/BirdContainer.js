import React, { useState } from 'react';
import { MIN_HEIGHT_IMAGE } from '../data';
import AppPlayer from './AppPlayer';

export default () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const currentBird = {
    birdName: 'Bird name',
    birdImageData: {
      src: 'https://via.placeholder.com/300x200',
      alt: 'bird',
    },
    birdSoundData: '',
  };
  const heightBlock = MIN_HEIGHT_IMAGE;
  const image = isAnswered ? (
    <img
      src={currentBird.birdImageData.src}
      alt={currentBird.birdImageData.alt}
      className="img-fluid"
    />
  ) : (
    <span role="img" aria-label="bird" style={{ fontSize: 120 }}>
      🐦
    </span>
  );
  const title = isAnswered ? currentBird.birdName : 'Что я за птица?';
  return (
    <>
      <div className="col-sm-5 d-flex flex-grow-1 justify-content-center align-items-center ">
        <div
          className="d-flex flex-grow-1 justify-content-center align-items-center "
          style={{ minHeight: heightBlock }}
        >
          {image}
        </div>
      </div>
      <div className="col-sm-7 col-12 justify-content-center d-flex flex-column p-3">
        <div>
          <h2 className="text-center">{title}</h2>
        </div>
        <AppPlayer />
      </div>
    </>
  );
};
