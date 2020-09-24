import React, { useState, createContext, useEffect } from 'react';

const TagsContext = createContext();

const TagsContextProvider = (props) => {
  const [allRepoTags, setAllRepoTags] = useState([]);
  const [selectedRepoTags, setSelectedRepoTags] = useState([]);

  // available filters are set in this request and doesn't change
  useEffect(() => {
    // Request:
    const requestedFilters = Array.from({ length: 40 }).map(
      (_, i) => `Tag ${i}`
    );
    setAllRepoTags(requestedFilters);
  }, []);

  return (
    <TagsContext.Provider
      value={{ allRepoTags, selectedRepoTags, setSelectedRepoTags }}
    >
      {props.children}
    </TagsContext.Provider>
  );
};

export { TagsContextProvider, TagsContext };
