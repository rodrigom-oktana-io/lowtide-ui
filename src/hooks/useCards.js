import { useState, useEffect, useContext } from 'react';
import { repoTemplatesResponse, orgTemplatesResponse } from '../mockData';
import { TagsContext } from '../context/TagsContext';

const useCards = (type) => {
  const [cards, setCards] = useState([]);

  const {
    setAllRepoTags,
    setAllOrgTags,
    selectedRepoTags,
    selectedOrgTags,
  } = useContext(TagsContext);

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
    let cardsToRender = [];
    if (type === 'available') {
      if (selectedRepoTags.length === 0) {
        cardsToRender = cards;
      } else {
        // Filter those who have at least one tag that is in the selcted tags
        cardsToRender = cards.filter(
          (card) =>
            card.template.tags &&
            card.template.tags.some((tag) => selectedRepoTags.includes(tag))
        );
      }
    } else {
      if (selectedOrgTags.length === 0) {
        cardsToRender = cards;
      } else {
        cardsToRender = cards.filter(
          (card) =>
            card.template.tags &&
            card.template.tags.some((tag) => selectedOrgTags.includes(tag))
        );
      }
    }

    return cardsToRender;
  };

  return [cardsToRender(type)];
};

export default useCards;
