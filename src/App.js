import './App.css';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import Books from './components/books/Books';
import { useEffect, useState } from 'react';
import { useGetData } from './hooks/useGetData';

function App() {
  const { books, getBooks } = useGetData();
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.tags-container')) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    getBooks();
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='App'>
      <Header />
      <Filters books={books} toggleActive={toggleActive} isActive={isActive} />
      <Books books={books} />
    </div>
  );
}

export default App;
