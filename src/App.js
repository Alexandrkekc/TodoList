import React, { useEffect } from 'react';
import Modal from './Modal/Modal';
import TodoList from './Todo/TodoList';
import Context from './Context';

import Loader from './Loader';

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./Todo/AddTodo')), 1000);
    })
);

function App() {
  let [todos, setTodos] = React.useState([
    // { id: 1, completed: false, title: 'HTML5' },
    // { id: 2, completed: false, title: 'CSS3' },
    // { id: 3, completed: false, title: 'JavaScript' },
    // { id: 4, completed: false, title: 'React' },
  ]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      });
  }, []);

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
        <Modal />
        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}
        {todos.length !== 0 ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>Нет Записей</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
