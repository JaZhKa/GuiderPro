import { useState } from 'react';

export const useGetData = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [error, setError] = useState(null);

  const getAllBooks = async () => {
    await fetch('http://localhost:9000/')
      .catch((error) => {
        setError(error);
        throw new Error(error);
      })
      .then((response) => response.json())
      .then((json) => {
        setAllBooks(json);
      });
  };

  return {
    allBooks,
    error,
    getAllBooks,
  };
};
