import { useState, useEffect } from 'react';
import { repoTemplatesResponse, orgTemplatesResponse } from '../mockData';

const useCards = (type) => {
  const [cards, setCards] = useState([]);

  const getCards = async (type) => {
    // TODO: Get real cards
    return type === 'available' ? repoTemplatesResponse : orgTemplatesResponse;
  };

  useEffect(() => {
    const setNewCards = async () => {
      const cards = await getCards(type);
      setCards(cards);
    };
    setNewCards();
  });

  return cards;
};

export default useCards;
