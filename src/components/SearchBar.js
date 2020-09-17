import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles({
  root: {
    padding: '8px 4px',
    display: 'flex',
    borderRadius: '7px',
  },
  input: {
    fontFamily: 'Montserrat',
    marginLeft: '.5rem',
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
    </Paper>
  );
};

export default SearchBar;
