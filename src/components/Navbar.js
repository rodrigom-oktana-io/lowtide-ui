import React from 'react';
import './Navbar.scss';
import ddtIcon from '../assets/ddt_icon.png';
import { Link } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';

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
        <div className="navBar__settings">
          <SettingsIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
