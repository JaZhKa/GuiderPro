import './Tags.css';
import Tag from './../tag/Tag';

function Tags({ allBooks, toggleActive, isActive, selectTags, setSelectTags }) {
  return (
    <div className='tags-container'>
      <span onClick={toggleActive}>tags {isActive ? '▲' : '▼'}</span>
      <div className={`tags-selector ${isActive ? 'active' : ''}`}>
        {[...new Set(allBooks.map((book) => book.tags).flatMap((tag) => tag))].map(
          (tag) => (
            <Tag key={tag } tag={tag} selectTags={selectTags} setSelectTags={setSelectTags} />
          )
        )}
      </div>
    </div>
  );
}

export default Tags;
