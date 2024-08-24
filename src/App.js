import './App.css';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Books from './components/books/Books';
import { useEffect, useState } from 'react';
import { useGetData } from './hooks/useGetData';
import { useFilter } from './hooks/useFilter';

function App() {
  const { allBooks, getAllBooks } = useGetData();
  const { books, filterBooksByTags } = useFilter();
  const [isActive, setIsActive] = useState(false);
  const [tags, setTags] = useState([]);
  const [selectTags, setSelectTags] = useState([]);

  const toggleActive = () => setIsActive(!isActive);

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.tags-container')) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    getAllBooks();
    filterBooksByTags(selectTags, allBooks);
  }, []);

  useEffect(() => {
    setTags(selectTags);
    filterBooksByTags(selectTags, allBooks);
  }, [selectTags]);
  
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
      />
      <Books books={books} selectTags={selectTags} setSelectTags={setSelectTags} />
    </div>
  );
}

export default App;
