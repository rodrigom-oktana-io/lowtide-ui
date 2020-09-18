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
    marginBottom: '5px',
    '&$expanded': {
      margin: '0 0 5px 0',
    },
  },
  detailsRoot: {
    padding: '2rem',
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
    height: '4rem',
  },
  summaryContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    padding: '0',
  },
  arrow: {
    color: '#F6F6F6',
  },
});

const Card = ({ type, startSelected, startExpanded, warning }) => {
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
          [classes.selected]: selected,
          [classes.warning]: type === 'org' && warning,
        })}
        classes={{
          root: classes.summaryRoot,
          content: classes.summaryContent,
        }}
      >
        <div className="card-header__leftArea">
          {type === 'available' ? (
            <Checkbox selected={selected} setParentSelected={setSelected} />
          ) : null}
          <div className="summaryBody__title">Name of the template</div>
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
          <div className="cardContent__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper
            non mauris nec semper. Sed euismod purus et orci mattis, id aliquet
            magna volutpat. Aliquam sed turpis eget ipsum sodales tristique non
            vitae ante. Proin venenatis non lorem vitae iaculis.
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Card;
