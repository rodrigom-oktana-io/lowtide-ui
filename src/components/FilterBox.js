import React from 'react';
import { Popover, Button, Chip } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';

import { useFilters, useFiltersStyles } from '../hooks/useFilters';

import './FilterBox.scss';

const FilterBox = () => {
  const classes = useFiltersStyles();

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
    handleClearFilters,
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
              <div className="filterBoxContent__header">Selected Tags </div>

              <div class="filterBoxContent__clearButtonContainer">
                <Button
                  onClick={() => handleClearFilters()}
                  disableRipple
                  classes={{
                    root: clsx(classes.clearButton, {
                      [classes.hidden]: locallySelectedFilters.length === 0,
                    }),
                    label: classes.clearButtonLabel,
                  }}
                >
                  Clear
                </Button>
              </div>

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
              onClick={() => handleCancel()}
              disableRipple
              classes={{
                root: clsx(classes.actionButtonRoot, classes.cancelButton),
                label: classes.buttonLabel,
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleSave()}
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
