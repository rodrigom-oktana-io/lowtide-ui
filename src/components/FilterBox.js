import React, { useContext } from 'react';
import { Popover, Button } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';

import { useFilters, useFiltersStyles } from '../hooks/useFilters';
import { FilterContext } from '../context/FilterContext';
import Tag from './Tag';

import './FilterBox.scss';

const FilterBox = ({ type }) => {
  const classes = useFiltersStyles();
  const { selectedRepoTags, selectedOrgTags } = useContext(FilterContext);

  const tagsSelected =
    (type === 'available' && selectedRepoTags.length > 0) ||
    (type === 'org' && selectedOrgTags.length > 0);

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
  ] = useFilters(type);

  return (
    <div>
      <Button
        onClick={handleOpen}
        disableRipple
        classes={{
          root: clsx({
            [classes.openButtonRootFiltersOn]: tagsSelected,
          }),
          label: clsx(classes.buttonLabel, {
            [classes.openButtonLabelFiltersOn]: tagsSelected,
          }),
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
                <Tag
                  key={`available-${i}`}
                  label={tag}
                  handleChipClick={handleChipClick}
                />
              ))}
            </div>
            <div className="filterBoxContent__filterGroup">
              <div className="filterBoxContent__header">Selected Tags </div>

              <div className="filterBoxContent__clearButtonContainer">
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
                <Tag
                  key={`selected-${i}`}
                  handleDelete={handleDelete}
                  label={tag}
                  selected
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
