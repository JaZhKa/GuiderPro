import './Books.css';
import Card from './../card/Card';

function Books({ books, selectTags, setSelectTags }) {
  return (
    <div className='books-container'>
      {books.map((book) => (
        <Card
          key={book.id}
          book={book}
          selectTags={selectTags}
          setSelectTags={setSelectTags}
        />
      ))}
      <h3>
        Total:{' '}
        <span className='price'>
          {books.map((book) => book.price).reduce((a, b) => a + b, 0)}$
        </span>
      </h3>
    </div>
  );
}

export default Books;
