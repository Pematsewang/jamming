import React, { useState } from 'react';
import './App.css';
import TrackListComponent from './components/TracklistComponent';  // Match the file name exactly
import Playlist from './components/Playlist';
function App() {
  // State for managing custom playlist
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlist, setPlaylist] = useState([]);


  const removeTrack = (trackToRemove) => {
    setPlaylist(prev => 
      prev.filter(track => track.id !== trackToRemove.id)
    );
  };

  const tracks = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1', uri: 'spotify:track:1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2', uri: 'spotify:track:2' },
    { id: 3, name: 'Song 3', artist: 'Artist 3', album: 'Album 3', uri: 'spotify:track:3' },
  ];
  

  // Function to add a track to the playlist
  const addSongToPlaylist = (track) => {
    setPlaylist([...playlist, track]);  // Add the selected track to the playlist
  };

  const savePlaylist = () => {
    const trackUris = playlist.map(track => track.uri);
    console.log("Saving the following URIs to Spotify:", trackUris);
  
    // Reset playlist and name after "saving"
    setPlaylist([]);
    setPlaylistName("New Playlist");
  };
  


  return (
    <div className="App">
      <h1>Jamming</h1>
      
      <TrackListComponent 
        tracks={tracks} 
        addSongToPlaylist={addSongToPlaylist} 
      />
      
      <Playlist
        playlist={playlist}
        removeTrack={removeTrack}
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        savePlaylist={savePlaylist}
      />
    </div>
  );
  
}

export default App;
