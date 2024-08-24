import './Filters.css';
import Sorts from '../sorts/Sorts';
import Tags from '../tags/Tags';

function Filters({ allBooks, toggleActive, isActive, selectTags, setSelectTags }) {
  return (
    <div className='filters-container'>
      <Sorts />
      <div className='filters__tags-wrap'>
        <Tags allBooks={allBooks} toggleActive={toggleActive} isActive={isActive} selectTags={selectTags} setSelectTags={setSelectTags} />
        <button className='reset-button'>reset rules</button>
      </div>
    </div>
  );
}

export default Filters;
