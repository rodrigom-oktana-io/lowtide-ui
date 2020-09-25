import React, { useState, createContext } from 'react';

const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [allRepoTags, setAllRepoTags] = useState([]);
  const [selectedRepoTags, setSelectedRepoTags] = useState([]);
  const [repoSearchText, setRepoSearchText] = useState('');

  const [allOrgTags, setAllOrgTags] = useState([]);
  const [selectedOrgTags, setSelectedOrgTags] = useState([]);
  const [orgSearchText, setOrgSearchText] = useState('');

  return (
    <FilterContext.Provider
      value={{
        allRepoTags,
        setAllRepoTags,
        selectedRepoTags,
        setSelectedRepoTags,
        allOrgTags,
        setAllOrgTags,
        selectedOrgTags,
        setSelectedOrgTags,
        repoSearchText,
        setRepoSearchText,
        orgSearchText,
        setOrgSearchText,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export { FilterContextProvider, FilterContext };
