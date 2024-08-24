import './Filters.css';
import Sorts from '../sorts/Sorts';
import Tags from '../tags/Tags';

function Filters({ books, toggleActive, isActive }) {
  return (
    <div className='filters-container'>
      <Sorts />
      <div className='filters__tags-wrap'>
        <Tags books={books} toggleActive={toggleActive} isActive={isActive} />
        <button className='reset-button'>reset rules</button>
      </div>
    </div>
  );
}

export default Filters;
