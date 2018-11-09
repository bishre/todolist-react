import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  render () {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.onSubmit}>
            <input
              placeholder="Task"
              value={this.props.currentItem.text}
              onChange={this.props.handleChange}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>
    )
  }
}




export default TodoList;
