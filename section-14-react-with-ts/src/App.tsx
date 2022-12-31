import { useState } from 'react';

import { Todo } from './todo.model';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddNewTodo = (newTodoText: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: newTodoText },
    ]);
  };

  const handleDeleteTodo = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddNewTodo} />
      <TodoList items={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
