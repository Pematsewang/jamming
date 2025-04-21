import React from 'react';

function TrackListComponent({ tracks }) {
  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id}>
          <h3>{track.name}</h3>
          <p>{track.artist} - {track.album}</p>
        </div>
      ))}
    </div>
  );
}

export default TrackListComponent;
