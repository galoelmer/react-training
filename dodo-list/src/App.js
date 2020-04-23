import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {
  state = {
    todos: [
      { content: 'Buy groceries', id: 1 },
      { content: 'Pay bills', id: 2 },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };

  addTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  render() {
    return (
      <div className="ui raised very padded text container segment">
        <div className="ui blue center aligned huge header">Todo's List</div>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
