import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './Todolist';
import InputItem from './InputItem';

const Functionality = () => {
  const getInitialItems = () => {
    const temp = localStorage.getItem('todoItem');
    const savedItems = JSON.parse(temp);
    return savedItems || [];
  };
  const [todoItem, setTodoItem] = useState(getInitialItems());
  useEffect(() => {
    const temp = JSON.stringify(todoItem);
    localStorage.setItem('todoItem', temp);
  }, [todoItem]);
  const handleChange = (id) => {
    setTodoItem((currentState) => currentState.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    }));
  };
  const deleteItem = (id) => setTodoItem([
    ...todoItem.filter((item) => item.id !== id),
  ]);
  const addItem = (title) => {
    const newItem = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodoItem([...todoItem, newItem]);
  };
  const updateItem = (newTitle, id) => setTodoItem(
    todoItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: newTitle,
        };
      }
      return item;
    }),
  );
  return (
    <div className="todoContainer">
      <InputItem addItem={addItem} />
      <TodoList
        todoItemProps={todoItem}
        handleChange={handleChange}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </div>
  );
};

export default Functionality;
