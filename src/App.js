import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './Context';
import AddTodo from './Todo/AddTodo';

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'HTML5' },
    { id: 2, completed: false, title: 'CSS3' },
    { id: 3, completed: false, title: 'JavaScript' },
    { id: 4, completed: false, title: 'React' },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          completed: false,
          title,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Frontend tutorial</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length !== 0 ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>Нет записей</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
