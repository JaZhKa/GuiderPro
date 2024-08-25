import { useState } from 'react';

export const useFilter = () => {
  const [books, setBooks] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const filterBooksByTags = (tags, allBooks) => {
    setSelectedTags(tags);
    if (tags.length === 0) {
      return setBooks(allBooks);
    }
    const filteredBooks = allBooks.filter((book) => {
      return book.tags.some((tag) => tags.includes(tag));
    });
    setBooks(filteredBooks);
  };

  return {
    books,
    setBooks,
    selectedTags,
    filterBooksByTags,
  };
};
