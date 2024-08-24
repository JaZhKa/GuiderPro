import './Card.css';
import Tag from './../tag/Tag';

function Card({ book, selectTags, setSelectTags }) {
  return (
    <div className='card-container'>
      <h3>
        {book.id} {book.title}
      </h3>
      <p>by {book.author}</p>
      <p>{book.date}</p>
      <p>{book.price}$</p>
      <hr />
      <div className='tags-wrap'>
        {book.tags.map((tag) => (
          <Tag key={tag} tag={tag} selectTags={selectTags} setSelectTags={setSelectTags} />
        ))}
      </div>
    </div>
  );
}

export default Card;
