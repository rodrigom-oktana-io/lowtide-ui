import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Checkbox from './Checkbox';
import Badge from './Badge';

import './Card.scss';

const useCardStyles = makeStyles({
  root: {
    marginBottom: '3px',
    boxShadow: 'none',
    '&$expanded': {
      margin: '0 0 3px 0',
    },
  },
  expanded: {},
  header: {
    backgroundColor: '#737373',
    color: '#F6F6F6',
    fontWeight: 700,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#005FB2',
  },
  warning: {
    backgroundColor: '#FFB75D',
    color: '#4f4f4f',
  },
  summaryRoot: {
    height: '3.5rem',
    '&$expanded': {
      minHeight: '3.5rem',
    },
  },
  arrow: {
    color: '#F6F6F6',
  },
  summaryContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    padding: '0',
  },
  detailsRoot: {
    padding: 16,
    fontSize: '.8rem',
  },
});

const Card = ({ type, startSelected, startExpanded, warning, data }) => {
  const [selected, setSelected] = useState(startSelected);
  const classes = useCardStyles();

  const badgeOptions = warning && {
    background: type === 'available' ? '#27AE60' : '#C23934',
    text: type === 'available' ? 'New version' : 'Old version',
    color: 'white',
  };

  const badge = warning && <Badge {...badgeOptions} />;

  return (
    <Accordion
      defaultExpanded={startExpanded}
      TransitionProps={{ unmountOnExit: true }}
      classes={{
        root: classes.root,
        expanded: classes.expanded,
      }}
    >
      <AccordionSummary
        // expandIcon={<ExpandMore className={classes.arrow} />}
        id="card-header"
        className={clsx(classes.header, {
          [classes.selected]: type === 'available' && selected,
          [classes.warning]: type === 'org' && warning,
        })}
        classes={{
          root: classes.summaryRoot,
          content: classes.summaryContent,
          expanded: classes.expanded,
        }}
      >
        <div className="card-header__leftArea">
          {type === 'available' ? (
            <Checkbox selected={selected} setParentSelected={setSelected} />
          ) : null}
          <div className="summaryBody__title">{data.name}</div>
        </div>
        <div className="card-header__rightArea">{warning ? badge : null}</div>
      </AccordionSummary>

      <AccordionDetails
        classes={{
          root: classes.detailsRoot,
        }}
      >
        <div className="cardContent">
          <div className="cardContent__heading">
            <div className="cardContent__author">
              <span className="bold">Author:</span> EAPMM
            </div>
            <div className="cardContent__version">
              <span className="bold">Version:</span> 2020.32
            </div>
          </div>
          <div className="cardContent__description">{data.description}</div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Card;
