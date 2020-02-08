import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { format } from '../myLib';

export default () => {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(null);
  const [seeking, setSeeking] = useState(false);
  const ref = useRef(null);
  const currentSound = {
    url:
      'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
  };

  const onProcess = ({ playedSeconds }) => {
    if (playing) {
      setPlayed(playedSeconds);
    }
  };
  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    ref.current.seekTo(parseFloat(e.target.value));
  };

  const timeStart = loading ? 'loading' : format(played);
  const timeFinish = duration ? format(duration) : '';
  const playPauseIcon = playing ? 'fa fa-pause' : 'fa fa-play';

  return (
    <form className="justify-content-center d-flex flex-column">
      <div className="d-flex justify-content-between">
        <time>{timeStart}</time>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          <i className={playPauseIcon} aria-hidden="true" />
        </button>
        <time>{timeFinish}</time>
      </div>
      <input
        type="range"
        className="custom-range"
        id="customRange1"
        min={0}
        max={duration}
        value={played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
        step={0.1}
      />
      <ReactPlayer
        url={currentSound.url}
        playing={playing}
        width={0}
        height={0}
        onDuration={setDuration}
        onProgress={onProcess}
        onEnded={() => {
          setPlaying(false);
          setPlayed(0);
        }}
        onReady={() => setLoading(false)}
        ref={ref}
      />
    </form>
  );
};
