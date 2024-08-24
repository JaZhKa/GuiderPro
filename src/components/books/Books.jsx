import './Books.css';
import Card from './../card/Card';

function Books({ books }) {
  return (
    <div className='books-container'>
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Books;