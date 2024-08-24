import './Tag.css';

function Tag({ tag, selectTags, setSelectTags }) {

  const handleTagClick = () => {
    let tags = JSON.parse(localStorage.getItem('tags')) || [];
    if (!tags.includes(tag)) {
      tags.push(tag);
    } else {
      tags = tags.filter((t) => t !== tag);
    }
    localStorage.setItem('tags', JSON.stringify(tags));
    setSelectTags(tags)
  };

  return (
    <button
      className={
        'tag-btn ' +
        (selectTags?.includes(tag) ? 'active' : '')
      }
      onClick={handleTagClick}
    >
      {tag}
    </button>
  );
}

export default Tag;
