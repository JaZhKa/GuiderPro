import { useState } from 'react';

export const useGetData = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const getBooks = async () => {
    await fetch('http://localhost:9000/')
      .catch((error) => {
        setError(error);
        throw new Error(error);
      })
      .then((response) => response.json())
      .then((json) => {
        setBooks(json);
      });
  };

  return {
    books,
    error,
    getBooks,
  };
};
