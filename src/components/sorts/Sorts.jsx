import './Sorts.css';
import { useState } from 'react';

function Sorts({ setSortBy, setSortOrder }) {
  const [activeSort, setActiveSort] = useState(null);
  const [sortOrders, setSortOrders] = useState({
    price: 'asc',
    author: 'asc',
    date: 'asc',
  });

  const handleSortChange = (event) => {
    const sortBy = event.target.textContent.split(' ')[0];
    setActiveSort(sortBy);
    setSortBy(sortBy);
    setSortOrders((prevOrders) => ({
      ...prevOrders,
      [sortBy]: sortOrders[sortBy] === 'asc' ? 'desc' : 'asc',
    }));
    setSortOrder(sortOrders[sortBy] === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className='sorts-container'>
      <span
        className={`sort-option ${activeSort === 'price' ? 'active' : ''}`}
        onClick={handleSortChange}
      >
        price {sortOrders.price === 'asc' ? '▲' : '▼'}
      </span>
      <span
        className={`sort-option ${activeSort === 'author' ? 'active' : ''}`}
        onClick={handleSortChange}
      >
        author {sortOrders.author === 'asc' ? '▲' : '▼'}
      </span>
      <span
        className={`sort-option ${activeSort === 'date' ? 'active' : ''}`}
        onClick={handleSortChange}
      >
        date {sortOrders.date === 'asc' ? '▲' : '▼'}
      </span>
    </div>
  );
}

export default Sorts;
