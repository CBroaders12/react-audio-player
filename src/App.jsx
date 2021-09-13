import React, { useState } from 'react';

import sound from './audio/doubt.mp3';
import AudioPlayer from './AudioPlayer';

const App = () => {
  return (
    <div>
      <AudioPlayer src={sound} />
    </div>
  );
};

export default App;
