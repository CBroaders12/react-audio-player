import React, { useEffect, useRef, useState } from 'react';

// From https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, audio];
};

function AudioPlayer(props) {
  const [playing, toggle, audio] = useAudio(props.src);

  return (
    <div>
      <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default AudioPlayer;
