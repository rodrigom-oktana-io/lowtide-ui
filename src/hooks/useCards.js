import { useState, useEffect, useContext } from 'react';
import { repoTemplatesResponse, orgTemplatesResponse } from '../mockData';
import { FilterContext } from '../context/FilterContext';

const useCards = (type) => {
  const [cards, setCards] = useState([]);

  const {
    setAllRepoTags,
    setAllOrgTags,
    selectedRepoTags,
    selectedOrgTags,
    repoSearchText,
    orgSearchText,
  } = useContext(FilterContext);

  const getCards = async (type) => {
    // TODO: Get real cards
    return type === 'available' ? repoTemplatesResponse : orgTemplatesResponse;
  };

  useEffect(() => {
    const setNewCardsAndTags = async () => {
      const cards = await getCards(type);
      setCards(cards);

      let allTags = [];
      cards.forEach((card) => {
        const tags = card.template.tags || []; // For elements that doesn't have ther 'tags' key
        allTags = allTags.concat(tags);
      });
      // Set only unique tags
      allTags = allTags.filter((el, i, arr) => arr.indexOf(el) === i);

      if (type === 'available') return setAllRepoTags(allTags);
      setAllOrgTags(allTags);
    };
    setNewCardsAndTags();
  }, [setAllRepoTags, type, setAllOrgTags]);

  const cardsToRender = () => {
    const selectedTags =
      type === 'available' ? selectedRepoTags : selectedOrgTags;

    const searchText =
      type === 'available'
        ? repoSearchText.toLowerCase()
        : orgSearchText.toLowerCase();

    let cardsToRender = [...cards];

    // Filter by tags
    if (selectedTags.length > 0) {
      cardsToRender = cardsToRender.filter(
        (card) =>
          card.template.tags &&
          card.template.tags.some((tag) => selectedTags.includes(tag))
      );
    }

    // Filter by searchText
    if (searchText.length > 0) {
      cardsToRender = cardsToRender.filter(
        (card) =>
          (card.template.label &&
            card.template.label.toLowerCase().includes(searchText)) ||
          (card.template.description &&
            card.template.description.toLowerCase().includes(searchText)) ||
          (card.template.tags &&
            card.template.tags.some((tag) =>
              tag.toLowerCase().includes(searchText)
            ))
      );
    }

    return cardsToRender;
  };

  return [cardsToRender(type)];
};

export default useCards;
