import './Filters.css';
import Sorts from '../sorts/Sorts';
import Tags from '../tags/Tags';

function Filters({
  allBooks,
  toggleActive,
  isActive,
  selectTags,
  setSelectTags,
}) {
  const handleReset = () => {
    setSelectTags([]);
    localStorage.removeItem('tags');
  };

  return (
    <div className='filters-container'>
      <Sorts />
      <div className='filters__tags-wrap'>
        <Tags
          allBooks={allBooks}
          toggleActive={toggleActive}
          isActive={isActive}
          selectTags={selectTags}
          setSelectTags={setSelectTags}
        />
        <button className='reset-button' onClick={handleReset}>
          reset rules
        </button>
      </div>
    </div>
  );
}

export default Filters;
