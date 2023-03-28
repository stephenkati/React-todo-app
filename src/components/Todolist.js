import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todoItemProps, handleChange, deleteItem }) => (
  <ul>
    {
        todoItemProps.map((item) => (
          <TodoItem
            key={item.id}
            itemProp={item}
            handleChange={handleChange}
            deleteItem={deleteItem}
          />
        ))
      }
  </ul>
);

TodoList.propTypes = {
  todoItemProps: PropTypes.objectOf.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TodoList;
