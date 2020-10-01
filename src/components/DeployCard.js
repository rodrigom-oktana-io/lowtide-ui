import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core/';
import clsx from 'clsx';

import Checkbox from './Checkbox';
import Badge from './Badge';
import Tag from './Tag';

import './Card.scss';
import useCardStyles from '../hooks/useCardStyles';

const Card = ({
  type,
  startSelected,
  startExpanded,
  warning,
  data,
  handleCardSelection,
}) => {
  const [selected, setSelected] = useState(startSelected);
  const classes = useCardStyles();

  // Add card to selected cards array.
  useEffect(() => {
    if (type === 'available') handleCardSelection(data.template_key, selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

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
              <strong className="blue">Author:</strong> EAPMM
            </div>
            <div className="cardContent__version">
              <strong className="blue">Version:</strong> 2020.32
            </div>
          </div>
          <div className="cardContent__description">
            {data.description || 'No description provided.'}
          </div>
          {data.tags && (
            <div className="cardContent__tags">
              {data.tags &&
                data.tags.map((tag) => (
                  <Tag key={`key-${tag}`} label={tag} selected />
                ))}
            </div>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Card;
