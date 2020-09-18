import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popover, Button, Chip } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import { TemplateFiltersContext } from '../FiltersContext';

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
  // Get all Filters requested on page Load, filters selected and the fuction to set the selected filters
  const { allFilters, selectedFilters, setSelectedFilters } = useContext(
    TemplateFiltersContext
  );

  // Filters in the Popover
  const [locallyAvailableFilters, setLocallyAvailableFilters] = useState([]);
  // allFilters change with use effect, we need to update local available
  useEffect(() => {
    setLocallyAvailableFilters(allFilters);
  }, [allFilters]);

  const [locallySelectedFilters, setLocallySelectedFilters] = useState(
    selectedFilters
  );

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  // Save filters state before opening PopOver
  const [snapshot, setSnapshot] = useState(null);

  const handleOpen = (event) => {
    setSnapshot({ locallyAvailableFilters, locallySelectedFilters });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    handleCancel();
    setAnchorEl(null);
  };

  const handleChipClick = (tag) => {
    setLocallyAvailableFilters(
      locallyAvailableFilters.filter((el) => el !== tag)
    );
    setLocallySelectedFilters([...locallySelectedFilters, tag]);
  };

  const handleDelete = (tag) => {
    setLocallySelectedFilters(
      locallySelectedFilters.filter((el) => el !== tag)
    );
    setLocallyAvailableFilters([...locallyAvailableFilters, tag]);
  };

  const handleSave = () => {
    setSelectedFilters(locallySelectedFilters);
    setAnchorEl(null);
  };

  const handleCancel = () => {
    setLocallyAvailableFilters(snapshot.locallyAvailableFilters);
    setLocallySelectedFilters(snapshot.locallySelectedFilters);
    setSnapshot(null);
    setAnchorEl(null);
  };

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
