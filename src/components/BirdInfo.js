import React, { useState } from 'react';
import { MIN_HEIGHT_IMAGE } from '../data';
import AppPlayer from './AppPlayer';

export default () => {
  const [url, setUrl] = useState(
    'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
  );
  const [playing, setPlaying] = useState(false);
  const currentBird = {
    birdName: 'Bird name',
    birdLatinName: 'birdLatinName birdLatinName',
    birdImageData: {
      src: 'https://via.placeholder.com/300x200',
      alt: 'bird',
    },
    birdSoundData: '',
    birdInformation:
      'birdInformationbir dInformationbirdInformationbi rdInformationbi rdInformationbirdInformation',
  };
  return (
    <div className="p-2 row">
      <div className="col-sm-5 d-flex flex-grow-1 justify-content-center align-items-center ">
        <div
          className="d-flex flex-grow-1 justify-content-center align-items-center "
          style={{ minHeight: MIN_HEIGHT_IMAGE }}
        >
          <img
            src={currentBird.birdImageData.src}
            alt={currentBird.birdImageData.alt}
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-sm-7 col-12 p-3">
        <div>
          <h2 className="text-center">{currentBird.birdName}</h2>
        </div>
        <div>
          <p className="text-center">{currentBird.birdLatinName}</p>
        </div>
        <AppPlayer playing={playing} setPlaying={setPlaying} url={url} />
      </div>
      <p className="text-center">{currentBird.birdInformation}</p>
    </div>
  );
};
