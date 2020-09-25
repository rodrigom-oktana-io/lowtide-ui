import React, { useState, createContext } from 'react';

const TagsContext = createContext();

const TagsContextProvider = (props) => {
  const [allRepoTags, setAllRepoTags] = useState([]);
  const [selectedRepoTags, setSelectedRepoTags] = useState([]);

  const [allOrgTags, setAllOrgTags] = useState([]);
  const [selectedOrgTags, setSelectedOrgTags] = useState([]);

  return (
    <TagsContext.Provider
      value={{
        allRepoTags,
        setAllRepoTags,
        selectedRepoTags,
        setSelectedRepoTags,
        allOrgTags,
        setAllOrgTags,
        selectedOrgTags,
        setSelectedOrgTags,
      }}
    >
      {props.children}
    </TagsContext.Provider>
  );
};

export { TagsContextProvider, TagsContext };
