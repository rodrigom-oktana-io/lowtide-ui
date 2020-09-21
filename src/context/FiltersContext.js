import React, { useState, createContext, useEffect } from 'react';

const TemplateFiltersContext = createContext();

const TemplateFiltersContextProvider = (props) => {
  const [allFilters, setAllFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  // available filters are set in this request and doesn't change
  useEffect(() => {
    // Request:
    const requestedFilters = Array.from({ length: 40 }).map(
      (_, i) => `Tag ${i}`
    );
    setAllFilters(requestedFilters);
  }, []);

  return (
    <TemplateFiltersContext.Provider
      value={{ allFilters, selectedFilters, setSelectedFilters }}
    >
      {props.children}
    </TemplateFiltersContext.Provider>
  );
};

export { TemplateFiltersContextProvider, TemplateFiltersContext };
