import React, { useState, createContext } from 'react';

const TemplateFiltersContext = createContext();

const TemplateFiltersContextProvider = (props) => {
  const [filters, setFilters] = useState([]);

  return (
    <TemplateFiltersContext.Provider value={{ filters, setFilters }}>
      {props.children}
    </TemplateFiltersContext.Provider>
  );
};

export { TemplateFiltersContextProvider, TemplateFiltersContext };
