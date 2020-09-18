import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  settingsDrawer: {
    outline: 'inherit',
    border: 'none',
    cursor: 'pointer',
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    padding: 4,
    backgroundColor: '#005FB2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: ' #F6F6F6',
  },
});

const SettingsDrawer = ({ position }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      Placeholder
    </div>
  );

  return (
    <div>
      <button className={classes.settingsDrawer} onClick={toggleDrawer(true)}>
        <SettingsIcon />
      </button>
      <Drawer anchor={position} open={open} onClose={toggleDrawer(false)}>
        {list(position)}
      </Drawer>
    </div>
  );
};

export default SettingsDrawer;
