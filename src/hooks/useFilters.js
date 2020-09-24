import { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { TagsContext } from '../context/TagsContext';

const useFiltersStyles = makeStyles((theme) => ({
  buttonLabel: {
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontSize: '.8rem',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  chipRoot: {
    backgroundColor: '#737373',
    margin: 3,
    padding: '0 2px',
  },
  chipRootSelected: {
    backgroundColor: '#005FB2',
  },
  chipLabel: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 'x-small',
    marginRight: '1px',
  },
  actionButtonRoot: {
    width: '6rem',
    padding: 2.5,
    marginRight: 4,
    color: 'white',
  },
  saveButton: {
    backgroundColor: '#27AE60',
    '&:hover': {
      backgroundColor: '#118f45',
    },
  },
  cancelButton: {
    backgroundColor: '#4f4f4f',
    '&:hover': {
      backgroundColor: '#737373',
    },
  },
  clearButton: {
    minWidth: 50,
    padding: 0,
    color: 'white',
    backgroundColor: '#4f4f4f',
    '&:hover': {
      backgroundColor: '#737373',
    },
  },
  clearButtonLabel: {
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontSize: '.5rem',
  },
  hidden: {
    display: 'none',
  },
}));

const useFilters = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Get all Filters requested on page Load, filters selected and the fuction to set the selected filters
  const { allRepoTags, selectedRepoTags, setSelectedRepoTags } = useContext(
    TagsContext
  );

  // Filters in the Popover
  const [locallyAvailableFilters, setLocallyAvailableFilters] = useState([]);
  // allFilters change with use effect in the Context Provider, we need to update local available, too
  useEffect(() => {
    setLocallyAvailableFilters(allRepoTags);
  }, [allRepoTags]);

  const [locallySelectedFilters, setLocallySelectedFilters] = useState(
    selectedRepoTags
  );

  // Save filters state before opening PopOver
  const [snapshot, setSnapshot] = useState(null);

  const handleOpen = (event) => {
    setSnapshot({ locallyAvailableFilters, locallySelectedFilters });
    setAnchorEl(event.currentTarget);
  };

  const handleCancel = () => {
    setLocallyAvailableFilters(snapshot.locallyAvailableFilters);
    setLocallySelectedFilters(snapshot.locallySelectedFilters);
    setSnapshot(null);
    setAnchorEl(null);
  };

  const handleClose = () => {
    handleCancel();
    setAnchorEl(null);
  };

  const handleChipClick = (tag) => {
    setLocallyAvailableFilters(
      locallyAvailableFilters.filter((el) => el !== tag)
    );
    setLocallySelectedFilters([...locallySelectedFilters, tag]);
  };

  const handleDelete = (tag) => {
    setLocallySelectedFilters(
      locallySelectedFilters.filter((el) => el !== tag)
    );
    setLocallyAvailableFilters([...locallyAvailableFilters, tag]);
  };

  const handleSave = () => {
    setSelectedRepoTags(locallySelectedFilters);
    setAnchorEl(null);
  };

  const handleClearFilters = () => {
    setLocallySelectedFilters([]);
  };

  return [
    anchorEl,
    locallyAvailableFilters,
    locallySelectedFilters,
    handleChipClick,
    handleDelete,
    handleOpen,
    handleClose,
    handleCancel,
    handleSave,
    handleClearFilters,
  ];
};

export { useFilters, useFiltersStyles };
