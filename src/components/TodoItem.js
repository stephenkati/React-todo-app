import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, deleteItem }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    {itemProp.title}
    <button type="button" onClick={() => deleteItem(itemProp.id)}>delete</button>
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.arrayOf.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TodoItem;
