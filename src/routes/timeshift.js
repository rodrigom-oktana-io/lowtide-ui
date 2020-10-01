import React from 'react';
import NavBar from '../components/Navbar';
import CardContainer from '../components/CardContainer';

import '../assets/pagesStyles.scss';

function timeshift() {
  return (
    <div className="fullPage">
      <NavBar activeTab="timeshift" />
      <main className="main-wrapper">
        <h3 className="page-title">Timeshifting Dataflow</h3>
        <p className="page-description">
          Run timeshifting on selected datasets of the Analytics Apps you have
          deployed to your organization, so you can show better data in your
          demos!
        </p>
        <div className="page-mainContainer">
          <CardContainer
            styles={{ width: '30vw', height: '65vh' }}
          ></CardContainer>

          <CardContainer
            styles={{ width: '30vw', height: '65vh' }}
          ></CardContainer>
        </div>
      </main>
    </div>
  );
}

export default timeshift;
