// import React, { useContext } from 'react';
import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from '../components/Navbar';
import CardContainer from '../components/CardContainer';
import { TemplateFiltersContext } from '../context/FiltersContext';

import './deploy.scss';

const useStyles = makeStyles((theme) => ({
  label: {
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    fontWeight: '700',
  },
  root: {
    height: 'fit-content',
    padding: '4px 12px',
    color: 'white',
    backgroundColor: '#005FB2',
    '&:hover, &:focus': {
      backgroundColor: '#016dcc',
    },
  },
}));

const Deploy = () => {
  const classes = useStyles();

  const { selectedFilters } = useContext(TemplateFiltersContext);

  return (
    <div className="fullPage">
      <NavBar activeTab="deploy" />
      <main className="main-wrapper">
        <h3 className="page-title">Deploy Templates</h3>
        <p className="page-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus eu dictum
          nisl scelerisque bibendum adipiscing pellentesque. Commodo venenatis
          nec hendrerit urna vulputate egestas porttitor orci, orci. In
          ultricies nec non vel nunc vitae. Faucibus in et elit arcu arcu diam
          mollis placerat.{' '}
        </p>
        <div className="page-cardContainers">
          <CardContainer
            type="available"
            styles={{ width: '30vw', height: '65vh' }}
          />

          <Button
            disableRipple
            classes={{
              root: classes.root,
              label: classes.label,
            }}
          >
            Deploy
          </Button>

          <CardContainer
            type="org"
            styles={{ width: '30vw', height: '65vh' }}
          />
        </div>
        Selected tags:
        {selectedFilters.map((el) => (
          <span key={el}>{el} </span>
        ))}
      </main>
    </div>
  );
};

export default Deploy;
