import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({
  todoItemProps,
  handleChange,
  deleteItem,
  updateItem,
}) => (
  <ul>
    {
        todoItemProps.map((item) => (
          <TodoItem
            key={item.id}
            itemProp={item}
            handleChange={handleChange}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        ))
      }
  </ul>
);

TodoList.propTypes = {
  todoItemProps: PropTypes.objectOf.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default TodoList;
