import { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { FilterContext } from '../context/FilterContext';

const useFiltersStyles = makeStyles((theme) => ({
  buttonLabel: {
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontSize: '.8rem',
  },
  openButtonRootFiltersOn: {
    backgroundColor: '#005FB2',
    '&:hover': {
      backgroundColor: '#005FB2',
    },
  },
  openButtonLabelFiltersOn: {
    color: '#F6F6F6',
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

const useFilters = (type) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const {
    allRepoTags,
    selectedRepoTags,
    setSelectedRepoTags,
    allOrgTags,
    selectedOrgTags,
    setSelectedOrgTags,
  } = useContext(FilterContext);

  // Filters in the Popover
  const [locallyAvailableFilters, setLocallyAvailableFilters] = useState([]);

  // allFilters change with use effect in the Context Provider, we need to update local available, too
  useEffect(() => {
    setLocallyAvailableFilters(type === 'available' ? allRepoTags : allOrgTags);
  }, [allRepoTags, allOrgTags, type]);

  const [locallySelectedFilters, setLocallySelectedFilters] = useState(
    type === 'available' ? selectedRepoTags : selectedOrgTags
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
    setAnchorEl(null);
    if (type === 'available')
      return setSelectedRepoTags(locallySelectedFilters);
    setSelectedOrgTags(locallySelectedFilters);
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
