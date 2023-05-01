import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputItem = ({ addItem }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addItem(title);
      setTitle('');
    } else {
      setError('Please add an item!');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add item to list..."
        value={title}
        onChange={handleChange}
      />
      <button type="submit">
        <FaPlusCircle />
      </button>
      <span>{error}</span>
    </form>
  );
};
InputItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};
export default InputItem;
