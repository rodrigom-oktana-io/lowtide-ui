import { useState } from 'react';

const useDeploy = () => {
  const [selectedTemplates, setSelectedTemplates] = useState([]);

  const handleCardSelection = (key, selected) => {
    if (selected) {
      setSelectedTemplates([...selectedTemplates, key]);
    } else {
      setSelectedTemplates(
        selectedTemplates.filter((selectedKey) => selectedKey !== key)
      );
    }
  };

  const deployCards = () => {
    // Write code to deploy the cards
    if (selectedTemplates.length === 0) return alert('Select at least 1 card');
    alert(`Cards deployed: ${selectedTemplates.join(', ')}`);
  };

  return [selectedTemplates, handleCardSelection, deployCards];
};

export default useDeploy;
