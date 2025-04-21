import React, { useState } from 'react';
import './App.css';
import TrackListComponent from './components/TracklistComponent';  // Match the file name exactly

function App() {
  // State for managing custom playlist
  const [playlist, setPlaylist] = useState([]);

  const tracks = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
  ];

  // Function to add a track to the playlist
  const addSongToPlaylist = (track) => {
    setPlaylist([...playlist, track]);  // Add the selected track to the playlist
  };

  return (
    <div className="App">
      <h1>Jamming</h1>
      <TrackListComponent tracks={tracks} addSongToPlaylist={addSongToPlaylist} />
      <div>
        <h2>Custom Playlist</h2>
        <ul>
          {playlist.map((track, index) => (
            <li key={index}>
              {track.name} by {track.artist} ({track.album})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
