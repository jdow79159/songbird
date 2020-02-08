import React, { useState } from 'react';
import BirdInfo from './BirdInfo';

export default () => {
  const [isClickedSomeAnswer, setisClickedSomeAnswer] = useState(true);
  const [url, setUrl] = useState(
    'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
  );
  const [playing, setPlaying] = useState(false);
  return (
    <section className="col-md-7 ">
      {isClickedSomeAnswer ? (
        <BirdInfo />
      ) : (
        <div className="d-flex flex-grow-1 justify-content-center align-items-center">
          <p className="text-center h4 p-2">
            Предлагаю послушать плеер и выбрать название птицы, чей голос
            прозвучал...
          </p>
        </div>
      )}
    </section>
  );
};
