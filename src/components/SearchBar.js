import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const search = () => {
    if (term.trim()) {
      onSearch(term);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        value={term}
        onChange={handleTermChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={search}>SEARCH</button>
    </div>
  );
}

export default SearchBar;
