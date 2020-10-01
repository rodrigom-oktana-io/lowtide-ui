import React, { useContext, useState } from 'react';
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

const SearchBar = ({ type, placeholder }) => {
  const classes = useStyles();

  const [text, setText] = useState('');

  // get these values if the component is wrapped up by the FiltersContext, otherwise make them null
  const isDeployPage = Boolean(useContext(FilterContext));
  const { setRepoSearchText = null, setOrgSearchText = null } =
    useContext(FilterContext) || {};

  const handleChange = (e) => {
    setText(e.target.value);
    if (isDeployPage) {
      if (type === 'available') return setRepoSearchText(text);
      setOrgSearchText(text);
    } else {
      // Handle change for tiemshift page
    }
  };

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        value={text}
        onChange={(e) => handleChange(e)}
      />
      {/* FilterBox only for deploy page */}
      {isDeployPage && <FilterBox type={type} />}
    </Paper>
  );
};

export default SearchBar;
