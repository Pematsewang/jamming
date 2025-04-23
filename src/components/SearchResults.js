import React from 'react';

function SearchResults({ searchResults, onAdd }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <ul>
        {searchResults.map(track => (
          <li key={track.id}>
            {track.name} by {track.artist} ({track.album}){' '}
            <button onClick={() => onAdd(track)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
