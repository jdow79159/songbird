import React, { useState, useEffect } from 'react';
import AnswerItem from '../AnswerItem';
import { useDispatch, useSelector } from 'react-redux';
import { onClickAnswer } from '../../store/actions/birds';
import ReactPlayer from 'react-player';
export default () => {
  const answers = useSelector(state => {
    const correct = state.birds.currentQuestionId;
    return state.birds.questions[correct].map(el => ({
      id: el.id,
      name: el.name,
      clicked: el.clicked,
      correct: el.correct,
    }));
  });
  const isGetCorrectAnswer = useSelector(
    state => state.birds.isGetCorrectAnswer
  );
  const dispatch = useDispatch();
  const [playing, setPlaying] = useState(true);
  const [url, setUrl] = useState('');
  const [key, setKey] = useState('')
  const onAnswerClick = id => {
    if (!isGetCorrectAnswer) {
      if (answers.find(el => el.id === id).correct) {
        setUrl('/sounds/correct.mp3');
        setPlaying(true);
        // force update
        // new Audio Not implemented: HTMLMediaElement.prototype.play test error ???
        setKey(`${Math.random()}`);
      } else {
        setUrl('/sounds/wrong.mp3');
        setPlaying(true);
        setKey(`${Math.random()}`); // force update
      }
    }
    dispatch(onClickAnswer(id));
  };
  return (
    <section className="col-md-5">
      <div className="btn-group-vertical d-flex">
        {answers.map(el => (
          <AnswerItem key={el.id} answer={el} onAnswerClick={onAnswerClick} />
        ))}
        <ReactPlayer key={key} width={0} height={0} url={url} playing={playing} />
      </div>
    </section>
  );
};
