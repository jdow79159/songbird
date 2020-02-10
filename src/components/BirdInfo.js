import React, { useState, useEffect } from 'react';
import { MIN_HEIGHT_IMAGE } from '../data';
import AppPlayer from './AppPlayer';
import { useSelector } from 'react-redux';

export default () => {
  const [playing, setPlaying] = useState(false);
  const answer = useSelector(state =>
    state.birds.questions[state.birds.currentQuestionId].find(
      el => el.id === state.birds.activeId
    )
  );
  return (
    <div className="p-2 mx-0 row">
      <div className="col-sm-5 d-flex flex-grow-1 justify-content-center align-items-center ">
        <div
          className="d-flex flex-grow-1 justify-content-center align-items-center "
          style={{ minHeight: MIN_HEIGHT_IMAGE }}
        >
          <img src={answer.img} alt={answer.name} className="img-fluid" />
        </div>
      </div>
      <div className="col-sm-7 col-12 p-3">
        <div>
          <h2 className="text-center">{answer.name}</h2>
        </div>
        <div>
          <p className="text-center">{answer.latinName}</p>
        </div>
        <AppPlayer
          playing={playing}
          setPlaying={setPlaying}
          url={answer.audio}
        />
      </div>
      <p className="text-justify p-3">{answer.description}</p>
    </div>
  );
};
