import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './Todolist';
import InputItem from './InputItem';

const Functionality = () => {
  const [todoItem, setTodoItem] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
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
  return (
    <div>
      <InputItem addItem={addItem} />
      <TodoList
        todoItemProps={todoItem}
        handleChange={handleChange}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default Functionality;
