import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Spotify from './Spotify';             

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  // Search Spotify API and update search results
  const search = (term) => {
    console.log('Searching for:', term); 
    Spotify.search(term).then((results) => {
      console.log('Got results:', results); 
      setSearchResults(results);
    });
  };
  
 

  
  const addTrack = (track) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) return;
    setPlaylistTracks(prev => [...prev, track]);
  };

  // Remove track from playlist
  const removeTrack = (track) => {
    setPlaylistTracks(prev => prev.filter(savedTrack => savedTrack.id !== track.id));
  };

  // Save playlist to Spotify
  const savePlaylist = async () => {
    const trackUris = playlistTracks.map(track => track.uri);
    if (!trackUris.length) {
      alert('Add some tracks before saving!');
      return;
    }
    try {
      await Spotify.savePlaylist(playlistName, trackUris);
      alert('Playlist saved to Spotify!');
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
      setSearchResults([]);
    } catch (error) {
      alert('Error saving playlist: ' + error.message);
    }
  };

  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar onSearch={search} />
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlist={playlistTracks}
          removeTrack={removeTrack}
          playlistName={playlistName}
          setPlaylistName={setPlaylistName}
          savePlaylist={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
