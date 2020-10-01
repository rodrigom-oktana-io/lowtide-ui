import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from './SearchBar';

const useStyles = makeStyles({
  root: {
    padding: '1.5rem',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    width: (styles) => styles.width,
    height: (styles) => styles.height,
    // Hiding scrollbards
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    marginBottom: '2rem',
  },
  title: {
    color: '#4f4f4f',
    textAlign: 'center',
    marginBottom: '1rem',
  },
});

const CardContainer = ({
  children,
  title,
  type,
  styles,
  searchPlaceholder,
}) => {
  const classes = useStyles(styles);

  return (
    <Paper
      classes={{
        root: classes.root,
      }}
    >
      <h3 className={classes.title}>{title}</h3>
      {searchPlaceholder && (
        <SearchBar filterBox type={type} placeholder={searchPlaceholder} />
      )}

      {children}
    </Paper>
  );
};

export default CardContainer;
