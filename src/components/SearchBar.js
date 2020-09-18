import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import FilterBox from './FilterBox';

const useStyles = makeStyles({
  root: {
    padding: '8px 1rem',
    display: 'flex',
    borderRadius: '7px',
    alignItems: 'center',
  },
  input: {
    fontFamily: 'Montserrat',
    fontSize: '.8rem',
    flex: 1,
  },
});

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Templates"
        inputProps={{ 'aria-label': 'search templates' }}
      />
      <FilterBox />
    </Paper>
  );
};

export default SearchBar;
