import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    backgroundColor: (props) => props.background || '#27AE60',
    padding: '0.5rem',
    width: 'fit-content',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: (props) => props.color || 'black',
  },
});

const Badge = (props) => {
  const classes = useStyles(props);

  return (
    <div>
      <Paper elevation={0} className={classes.root}>
        {props.text}
      </Paper>
    </div>
  );
};

export default Badge;
