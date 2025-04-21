import React from 'react';
import TrackListComponent from './components/TracklistComponent';  // Match the file name exactly



function App() {
  const tracks = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
  ];

  return (
    <div className="App">
      <h1>Jamming</h1>
      <TrackListComponent tracks={tracks} />
    </div>
  );
}

export default App;