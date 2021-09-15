import React, { useEffect, useState } from 'react';

// From https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [stream, setStream] = useState(null);
  const [analyser, setAnalyser] = useState(null);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    audio.addEventListener('loadeddata', () => {
      setStream(audio.captureStream());
      setLoaded(true);
    });
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
      audio.removeEventListener('loadeddata', () => {
        setStream(audio.captureStream);
        setLoaded(true);
      });
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      setAnalyser(audioContext.createAnalyser());
      // source.connect(analyser);
    }
  }, [loaded]);

  return [playing, toggle, analyser];
};

function AudioPlayer(props) {
  const [playing, toggle, stream] = useAudio(props.src);

  return (
    <div>
      <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default AudioPlayer;
