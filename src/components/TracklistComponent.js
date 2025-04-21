import React from 'react';

function TrackListComponent({ tracks, addSongToPlaylist }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <p>{track.name} by {track.artist}</p>
            <p>Album: {track.album}</p>
            <button onClick={() => addSongToPlaylist(track)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackListComponent;
