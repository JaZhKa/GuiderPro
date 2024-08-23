import './Filters.css';
import Sorts from '../sorts/Sorts';
import Tags from '../tags/Tags';

function Filters() {
  return (
    <div className='filters-container'>
      <Sorts />
      <div className='filters__tags-wrap'>
        <Tags />
        <button className='reset-button'>reset rules</button>
      </div>
    </div>
  );
}

export default Filters;
