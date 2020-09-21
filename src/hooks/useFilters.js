import { useContext, useEffect, useState } from 'react';
import { TemplateFiltersContext } from '../context/FiltersContext';

const useFilters = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Get all Filters requested on page Load, filters selected and the fuction to set the selected filters
  const { allFilters, selectedFilters, setSelectedFilters } = useContext(
    TemplateFiltersContext
  );

  // Filters in the Popover
  const [locallyAvailableFilters, setLocallyAvailableFilters] = useState([]);
  // allFilters change with use effect in the Context Provider, we need to update local available, too
  useEffect(() => {
    setLocallyAvailableFilters(allFilters);
  }, [allFilters]);

  const [locallySelectedFilters, setLocallySelectedFilters] = useState(
    selectedFilters
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
    setSelectedFilters(locallySelectedFilters);
    setAnchorEl(null);
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
  ];
};

export default useFilters;
