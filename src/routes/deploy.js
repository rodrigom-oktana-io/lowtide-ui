import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from '../components/Navbar';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';
import useCards from '../hooks/useCards';

import './deploy.scss';

const useStyles = makeStyles({
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
});

const Deploy = () => {
  const classes = useStyles();
  const [availableCards] = useCards('available');
  const [orgCards] = useCards('org');

  return (
    <div className="fullPage">
      <NavBar activeTab="deploy" />
      <main className="main-wrapper">
        <h3 className="page-title">Deploy Templates</h3>
        <p className="page-description">
          Einstein Analytics application Templates ready to be deployed. Pick
          the ones you want from the available section and click DEPLOY to get
          them to your org. You can also check what templates you already have
          in the right section.
        </p>
        <div className="page-cardContainers">
          <CardContainer
            type="available"
            styles={{ width: '30vw', height: '65vh' }}
          >
            {availableCards.map((card, i) => (
              <Card
                key={i}
                type={'available'}
                startExpanded={i === 0}
                warning={i === 6}
                data={{
                  name: card.template.label,
                  description: card.template.description,
                  tags: card.template.tags,
                }}
              />
            ))}
          </CardContainer>

          <Button
            disableRipple
            classes={{
              root: classes.root,
              label: classes.label,
            }}
          >
            Deploy
          </Button>

          <CardContainer type="org" styles={{ width: '30vw', height: '65vh' }}>
            {orgCards.map((card, i) => (
              <Card
                key={i}
                type={'org'}
                startExpanded={i === 0}
                warning={i === 6}
                data={{
                  name: card.template.label,
                  description: card.template.description,
                  tags: card.template.tags,
                }}
              />
            ))}
          </CardContainer>
        </div>
      </main>
    </div>
  );
};

export default Deploy;
