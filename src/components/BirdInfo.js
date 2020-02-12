import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppPlayer from './AppPlayer';
import AppImage from './AppImage';

export default () => {
  const [playing, setPlaying] = useState(false);
  const answer = useSelector((state) => state.birds.questions[state.birds.currentQuestionId].find(
    (el) => el.id === state.birds.activeId,
  ));
  return (
    <div className="mx-0 row pt-1">
      <div className="col-sm-5 d-flex flex-grow-1 justify-content-center align-items-center ">
        <div
          className="d-flex flex-grow-1 justify-content-center align-items-center pt-3"
        >
          <AppImage src={answer.img} alt={answer.name} className="img-fluid" />
        </div>
      </div>
      <div className="col-sm-7 col-12">
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
      <p className="text-justify pt-3">{answer.description}</p>
    </div>
  );
};
