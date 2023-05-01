import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import '../App.css';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

const TodoItem = ({
  itemProp,
  handleChange,
  deleteItem,
  updateItem,
}) => {
  const [editItem, setEditItem] = useState(false);
  const editInput = useRef(null);

  const handleEditItem = () => {
    setEditItem(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editItem) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      updateItem(editInput.current.value, itemProp.id);
      setEditItem(false);
    }
  };
  return (
    <li>
      <div className="todoItem" style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {itemProp.title}
        <div className="icons">
          <button type="button" className="edit" onClick={handleEditItem}>
            <AiFillEdit />
          </button>
          <button type="button" className="delete" onClick={() => deleteItem(itemProp.id)}>
            <FaTrash />
          </button>
        </div>
      </div>
      <input
        type="text"
        ref={editInput}
        defaultValue={itemProp.title}
        onChange={(e) => updateItem(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
        style={editMode}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.arrayOf.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default TodoItem;
