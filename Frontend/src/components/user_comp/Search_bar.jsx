import React, { useState } from 'react';

const Search_bar= ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Doctor..."
      value={query}
      onChange={handleChange}
      className="py-1 px-4 border-search border-search-color rounded-2xl bg-admin_form"
    />
  );
};

export default Search_bar;
