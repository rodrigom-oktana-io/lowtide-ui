import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import ddtIcon from '../assets/ddt_icon.png';
import SettingsDrawer from './SettingsDrawer';

const Navbar = ({ activeTab }) => {
  return (
    <nav className="navBar">
      <div className="navBar__iconTitle">
        <img className="navBar__icon" src={ddtIcon} alt="Demo Data Tool Icon" />
        <div className="navBar__title">Demo Data Tools</div>
      </div>

      <div className="navBar__links">
        <Link to="/deploy">
          <div
            className={`navBar__link ${activeTab === 'deploy' ? 'active' : ''}`}
          >
            Deploy
          </div>
        </Link>
        <Link to="/timeshift">
          <div
            className={`navBar__link ${
              activeTab === 'timeshift' ? 'active' : ''
            }`}
          >
            Timeshift
          </div>
        </Link>
        <Link to="/jobs">
          <div
            className={`navBar__link ${activeTab === 'jobs' ? 'active' : ''}`}
          >
            Jobs
          </div>
        </Link>
      </div>

      <div className="navBar__status">
        <div className="navBar__user">
          Logged in as jorge.pasco@salesforce.com
        </div>
        <button className="unstyled-button navBar__logout">Logout</button>
        <SettingsDrawer position="right" />
      </div>
    </nav>
  );
};

export default Navbar;
