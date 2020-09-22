import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './login.scss';
import Illustration from '../assets/Charts.svg';
import SalesforceIcon from '../assets/salesforce1.svg';

const useStyles = makeStyles({
  paperRoot: {
    zIndex: 1,
    marginLeft: '7rem',
    backgroundColor: '#F6F6F6',
    width: '30vw',
    height: '40vh',
    borderRadius: '10px',
    padding: '4rem',
    display: 'flex',
    flexDirection: 'column',
  },
});

const Login = () => {
  const classes = useStyles();

  return (
    <div className="login-screen">
      <img
        src={Illustration}
        alt="Illustration"
        className="background-illustration"
      />
      <Paper
        elevation={3}
        classes={{
          root: classes.paperRoot,
        }}
      >
        <h2 className="login-screen__title">
          Login to your <span className="blue">Salesforce Org</span>
        </h2>
        <p className="login-screen__description">
          Login to get the latest templates and timeshifting tool form the
          Salesforce EAPMM team!
        </p>
        <form className="login-screen__form">
          <input
            className="login-screen__input"
            type="email"
            placeholder="Salesforce account"
            required
          />
          <input
            className="login-screen__input"
            type="password"
            placeholder="Password"
            required
          />
          <button className="login-screen__submit">Submit</button>
        </form>
        <div className="login-screen__or-text">or</div>
        <button className="login-screen__salesforce">
          <img
            src={SalesforceIcon}
            alt="Salesforce Icon"
            className="salesforce-icon"
          />
          Salesforce Oauth
        </button>
      </Paper>
    </div>
  );
};

export default Login;
