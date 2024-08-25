import { useState } from 'react';

export const useSort = () => {
  const [sortBy, setSortBy] = useState(null);

  const sortBooks = (books, sortBy) => {
    setSortBy(sortBy);
    if (sortBy === 'price') {
      return [...books].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'author') {
      return [...books].sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortBy === 'date') {
      return [...books]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .sort((a, b) => a.author.localeCompare(b.author));
    } else {
      return books;
    }
  };

  return {
    sortBy,
    setSortBy,
    sortBooks,
  };
};
