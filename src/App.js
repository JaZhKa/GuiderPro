import './App.css';
import Filters from './components/filters/Filters';
import Header from './components/header/Header';
import { useEffect } from 'react';
import { useGetData } from './hooks/useGetData';

function App() {
  const { books, getBooks } = useGetData();

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);
  return (
    <div className='App'>
      <Header />
      <Filters />
    </div>
  );
}

export default App;
