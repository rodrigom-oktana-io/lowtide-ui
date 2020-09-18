// import React, { useContext } from 'react';
import React, { useContext } from 'react';
import NavBar from '../components/Navbar';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { TemplateFiltersContext } from '../FiltersContext';

const Deploy = () => {
  const { selectedFilters } = useContext(TemplateFiltersContext);

  return (
    <div>
      <NavBar activeTab="deploy" />
      <main className="main-wrapper">
        Deploy page
        <Card type="available" startExpanded warning />
        <Card type="available" startSelected />
        <Card type="available" />
        <Card type="org" />
        <Card type="org" warning />
        <SearchBar />
        Selected tags:
        {selectedFilters.map((el) => (
          <span key={el}>{el} </span>
        ))}
      </main>
    </div>
  );
};

export default Deploy;
