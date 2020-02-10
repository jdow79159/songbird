import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { format } from '../utils/myLib';

const AppPlayer = ({ url, playing, setPlaying}) => {
  const [loading, setLoading] = useState(true); // local
  // const [playing, setPlaying] = useState(false); // redux
  const [played, setPlayed] = useState(0); // local
  const [duration, setDuration] = useState(null); // local
  const ref = useRef(null);
  const onProcess = ({ playedSeconds }) => {
    if (playing) {
      setPlayed(playedSeconds);
    }
  };

  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = e => {
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
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
        step={0.1}
      />
      <ReactPlayer
        url={url}
        playing={playing}
        width={0}
        height={0}
        onDuration={setDuration}
        onProgress={onProcess}
        onEnded={() => {
          setPlaying(false);
          setPlayed(0);
        }}
        onReady={() => {
          setLoading(false);
          setPlayed(0);
        }}
        ref={ref}
      />
    </form>
  );
};

AppPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
  setPlaying: PropTypes.func.isRequired,
};
export default AppPlayer;
