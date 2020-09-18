import React, { useContext } from 'react';
import NavBar from '../components/Navbar';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { TemplateFiltersContext } from '../FiltersContext';

const Deploy = () => {
  const { filters } = useContext(TemplateFiltersContext);

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
        {filters.map((el) => (
          <div>{el}</div>
        ))}
      </main>
    </div>
  );
};

export default Deploy;
