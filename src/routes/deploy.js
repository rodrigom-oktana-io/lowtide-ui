import React from 'react';
import NavBar from '../components/Navbar';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

const deploy = () => {
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
      </main>
    </div>
  );
};

export default deploy;
