import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popover, Button, Chip } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import { TemplateFiltersContext } from '../FiltersContext';

import './FilterBox.scss';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: '1rem',
    fontFamily: 'Montserrat',
    fontSize: '.8rem',
  },
  label: {
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontSize: '.8rem',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const FilterBox = () => {
  const { filters, setFilters } = useContext(TemplateFiltersContext);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => console.log('deleted');

  const handleAdd = () => {
    setFilters([...filters, 'new filter'])
  }

  return (
    <div>
      <Button
        onClick={handleClick}
        disableRipple
        classes={{
          label: classes.label,
        }}
      >
        Tags
        <ExpandMore
          className={clsx(classes.expand, {
            [classes.expandOpen]: anchorEl,
          })}
        />
      </Button>
      <Popover
        open={anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={classes.content}>
          The content of the Popover.
          <Chip color="primary" onDelete={handleDelete} />
          <button onClick={() => handleAdd()}>Add</button>
        </div>
      </Popover>
    </div>
  );
};

export default FilterBox;
