function toggleBookmark(cards, id) {
  const newCards = cards.map((card) => {
    if (card.id === id) {
      return { ...card, bookmarked: !card.bookmarked };
    } else {
      return { ...card, bookmarked: card.bookmarked };
    }
  });
  return newCards;
}

export { toggleBookmark };
