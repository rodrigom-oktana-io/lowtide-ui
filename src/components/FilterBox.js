import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popover, Button, Chip } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';

import useFilters from '../hooks/useFilters';

import './FilterBox.scss';

const useStyles = makeStyles((theme) => ({
  buttonLabel: {
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
  chipRoot: {
    backgroundColor: '#737373',
    margin: 3,
    padding: '0 2px',
  },
  chipRootSelected: {
    backgroundColor: '#005FB2',
  },
  chipLabel: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 'x-small',
    marginRight: '1px',
  },
  actionButtonRoot: {
    width: '6rem',
    padding: 2.5,
    marginRight: 4,
    color: 'white',
  },
  saveButton: {
    backgroundColor: '#27AE60',
    '&:hover': {
      backgroundColor: '#118f45',
    },
  },
  cancelButton: {
    backgroundColor: '#4f4f4f',
    '&:hover': {
      backgroundColor: '#737373',
    },
  },
}));

const FilterBox = () => {
  const classes = useStyles();

  const [
    anchorEl,
    locallyAvailableFilters,
    locallySelectedFilters,
    handleChipClick,
    handleDelete,
    handleOpen,
    handleClose,
    handleCancel,
    handleSave,
  ] = useFilters();

  return (
    <div>
      <Button
        onClick={handleOpen}
        disableRipple
        classes={{
          label: classes.buttonLabel,
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
        open={Boolean(anchorEl)}
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
        <div className="filterBoxContent">
          <div className="filterBoxContent__filters">
            <div className="filterBoxContent__filterGroup">
              <div className="filterBoxContent__header">Available Tags</div>
              {locallyAvailableFilters.map((tag, i) => (
                <Chip
                  key={`available-${i}`}
                  // onDelete={handleDelete}
                  label={tag}
                  size="small"
                  classes={{
                    root: classes.chipRoot,
                    label: classes.chipLabel,
                  }}
                  onClick={() => handleChipClick(tag)}
                />
              ))}
            </div>
            <div className="filterBoxContent__filterGroup">
              <div className="filterBoxContent__header">Selected Tags</div>
              {locallySelectedFilters.map((tag, i) => (
                <Chip
                  key={`selected-${i}`}
                  onDelete={() => handleDelete(tag)}
                  label={tag}
                  size="small"
                  color="primary"
                  classes={{
                    root: clsx(classes.chipRoot, classes.chipRootSelected),
                    label: classes.chipLabel,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="filterBoxContent__buttonContainer">
            <Button
              onClick={handleCancel}
              disableRipple
              classes={{
                root: clsx(classes.actionButtonRoot, classes.cancelButton),
                label: classes.buttonLabel,
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disableRipple
              classes={{
                root: clsx(classes.actionButtonRoot, classes.saveButton),
                label: classes.buttonLabel,
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default FilterBox;
