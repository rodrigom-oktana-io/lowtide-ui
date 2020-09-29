import React from 'react';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  chipRoot: {
    backgroundColor: '#737373',
    margin: '6px 6px 0 0',
    padding: '0 2px',
  },
  chipRootSelected: {
    backgroundColor: '#1f86e0',
    '&:focus': {
      backgroundColor: '#005FB2',
    },
  },
  chipLabel: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 'x-small',
    marginRight: '1px',
  },
});

const Tag = ({ label, selected, handleChipClick, handleDelete }) => {
  const classes = useStyles();

  return (
    <Chip
      label={label}
      color={selected && 'primary'} // Primary allows for a good contrast of the Chip's delete button. (Useful when the Tag is selected)
      size="small"
      classes={{
        root: clsx(classes.chipRoot, {
          [classes.chipRootSelected]: selected,
        }),
        label: classes.chipLabel,
      }}
      onClick={handleChipClick ? () => handleChipClick(label) : null}
      onDelete={handleDelete ? () => handleDelete(label) : null}
    />
  );
};

export default Tag;
