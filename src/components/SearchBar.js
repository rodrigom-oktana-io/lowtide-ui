import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase } from '@material-ui/core';

import FilterBox from './FilterBox';

const useStyles = makeStyles({
  root: {
    padding: '8px 1rem',
    display: 'flex',
    borderRadius: '7px',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  input: {
    fontFamily: 'Montserrat',
    fontSize: '.8rem',
    flex: 1,
  },
});

const SearchBar = ({ type }) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        inputProps={{ 'aria-label': 'naked' }}
        className={classes.input}
        placeholder={'Search templates'}
      />
      <FilterBox type={type} />
    </Paper>
  );
};

export default SearchBar;
