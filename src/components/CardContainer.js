import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import SearchBar from './SearchBar';
import Card from './Card';

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
  },
  title: {
    color: '#4f4f4f',
    textAlign: 'center',
    marginBottom: '1rem',
  },
});

const CardContainer = ({ type, styles }) => {
  const classes = useStyles(styles);

  return (
    <Paper
      classes={{
        root: classes.root,
      }}
    >
      <h3 className={classes.title}>
        {type === 'available' ? 'Available Templates' : 'Your org'}
      </h3>
      <SearchBar filterBox placeholder="Search Templates" />
      <Card type={type} startExpanded warning />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
      <Card type={type} />
    </Paper>
  );
};

export default CardContainer;
