import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase } from '@material-ui/core';

import FilterBox from './FilterBox';
import { FilterContext } from '../context/FilterContext';

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
  const { setRepoSearchText, setOrgSearchText } = useContext(FilterContext);

  const handleChange = (e) => {
    if (type === 'available') return setRepoSearchText(e.target.value);
    setOrgSearchText(e.target.value);
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={'Search templates'}
        onChange={(e) => handleChange(e)}
      />
      <FilterBox type={type} />
    </Paper>
  );
};

export default SearchBar;
