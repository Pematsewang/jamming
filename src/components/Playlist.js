import React, { useState } from 'react';

function Playlist({ playlist, removeTrack, playlistName, setPlaylistName, savePlaylist }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          value={playlistName}
          onChange={handleNameChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <h2 onClick={() => setIsEditing(true)}>{playlistName}</h2>
      )}

      <ul>
        {playlist.map((track) => (
          <li key={track.id}>
            {track.name} by {track.artist} ({track.album}){' '}
            <button onClick={() => removeTrack(track)}>Remove</button>
          </li>
        ))}
      </ul>

     
      <button onClick={savePlaylist}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
