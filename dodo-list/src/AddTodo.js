import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: '',
  };

  handleChange = (e) => {
      this.setState({ content: e.target.value, id: Math.random() });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: '' });
  }

  render() {
    return (
      <div className="ui fluid action input">
        <input
          type="text"
          placeholder="Add dodo"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <div className="ui button" onClick={this.handleSubmit}>
          Add
        </div>
      </div>
    );
  }
}

export default AddTodo;
