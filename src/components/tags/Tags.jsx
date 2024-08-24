import './Tags.css';
import Tag from './../tag/Tag';

function Tags({ books, toggleActive, isActive }) {
  return (
    <div className='tags-container'>
      <span onClick={toggleActive}>tags {isActive ? '▲' : '▼'}</span>
      <div className={`tags-selector ${isActive ? 'active' : ''}`}>
        {[...new Set(books.map((book) => book.tags).flatMap((tag) => tag))].map(
          (tag) => (
            <Tag key={tag } tag={tag} />
          )
        )}
      </div>
    </div>
  );
}

export default Tags;
