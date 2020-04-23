import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="item" key={todo.id}>
          <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="ui center aligned container">You do not have Todo's left.</p>
  );
  return <div className="ui large celled list">{todosList}</div>;
};

export default Todos;
