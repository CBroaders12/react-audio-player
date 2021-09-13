import React, { useEffect, useRef, useState } from 'react';

function AudioPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [audioStream, setAudioStream] = useState(new MediaStream());
  // const audioContext = new (AudioContext || webkitURL.AudioContext)();
  // const analyser = audioContext.createAnalyser();
  // analyser.fftSize = 512;
  const audioEl = useRef(null);

  const toggleAudio = () => {
    console.dir(audioEl.current);
    if (isPlaying) {
      audioEl.current.pause();
      // setAudioStream(new MediaStream());
    } else {
      audioEl.current.play();
      // setAudioStream(audioEl.current.createStream());
    }

    setIsPlaying(!isPlaying);
  };

  // useEffect(() => {
  //   let source = audioContext.createMediaStreamSource(audioStream);
  //   source.connect(analyser);
  //   analyser.connect(audioContext.destination);
  // }, [audioStream]);

  return (
    <div>
      <audio ref={audioEl} src={props.src}></audio>
      <button onClick={toggleAudio}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default AudioPlayer;
