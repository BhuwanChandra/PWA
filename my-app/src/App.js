import React from 'react';
import './App.css';
import video from './videos/video1.mp4';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Art Videos</h1>
      </header>
          <div>
            <h2>artistic video</h2>
            <video height={300} controls src={video} />
          </div>
    </div>
  );
}

export default App;
