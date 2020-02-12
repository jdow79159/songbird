import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MIN_HEIGHT_IMAGE } from '../config';
import AppPlayer from './AppPlayer';
import { onSetPlaying } from '../store/actions/birds';
import AppImage from './AppImage';

export default () => {
  const isGetCorrectAnswer = useSelector(
    (state) => state.birds.isGetCorrectAnswer,
  );
  const question = useSelector((state) => {
    const current = state.birds.currentQuestionId;
    return state.birds.questions[current].find((q) => q.correct);
  });
  // const [playing, setPlaying] = useState(false);
  const playing = useSelector((state) => state.birds.playing);
  const dispatch = useDispatch();
  const setPlaying = () => {
    dispatch(onSetPlaying());
  };
  const heightBlock = MIN_HEIGHT_IMAGE;
  const image = isGetCorrectAnswer ? (
    <AppImage
      src={question.img}
      alt={question.name}
      className="img-fluid"
      height={MIN_HEIGHT_IMAGE}
    />
  ) : (
    <span role="img" aria-label="bird" style={{ fontSize: 160 }}>
      🐦
    </span>
  );
  const title = isGetCorrectAnswer ? question.name : 'Что я за птица?';
  return (
    <section className="py-2 card border-primary">
      <div className="card-body row">
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
          <AppPlayer
            playing={playing}
            setPlaying={setPlaying}
            url={question.audio}
          />
        </div>
      </div>
    </section>
  );
};
