import './App.css';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Books from './components/books/Books';
import { useEffect, useState } from 'react';
import { useGetData } from './hooks/useGetData';
import { useFilter } from './hooks/useFilter';
import { useSort } from './hooks/useSort';

function App() {
  const { allBooks, getAllBooks } = useGetData();
  const { books, setBooks, filterBooksByTags } = useFilter();
  const { sortBy, setSortBy, sortBooks } = useSort();
  const [isActive, setIsActive] = useState(false);
  const [tags, setTags] = useState([]);
  const [selectTags, setSelectTags] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleActive = () => setIsActive(!isActive);

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.tags-container')) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    getAllBooks();
    localStorage.setItem('tags', JSON.stringify(tags));
    filterBooksByTags(selectTags, allBooks);
  }, []);

  useEffect(() => {
    setTags(selectTags);
    filterBooksByTags(selectTags, allBooks);
  }, [selectTags]);

  useEffect(() => {
    const sortedBooks = sortBooks(books, sortBy, sortOrder);
    setBooks(sortOrder === 'asc' ? sortedBooks : sortedBooks.reverse());
  }, [sortBy, sortOrder]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='App'>
      <Header />
      <Filters
        allBooks={allBooks}
        toggleActive={toggleActive}
        isActive={isActive}
        selectTags={selectTags}
        setSelectTags={setSelectTags}
        tags={tags}
        setTags={setTags}
        setSortBy={setSortBy}
        setSortOrder={setSortOrder}
      />
      <Books
        books={books}
        selectTags={selectTags}
        setSelectTags={setSelectTags}
      />
    </div>
  );
}

export default App;
