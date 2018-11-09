import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import { addMessage } from './actions/postActions';
import {connect} from 'react-redux';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentItem: {key:'', text:''}
    }
  }
  handleChange = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem : currentItem
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.currentItem.text !== '') {
      this.props.submitNewMessage(this.state.currentItem);
      this.setState({
        currentItem: {key:'', text:''}
      })
    }
  }
  // deleteItem = key => {
  //   const filteredItems = this.props.messages.filter(item => {
  //     return item.key !== key
  //   })
  //
  //   console.log(filteredItems);
  //   console.log(this.props.messages);
  // }
  render() {
    return (
      <div className="App">
        <TodoList
          onSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          currentItem={this.state.currentItem}
        />
        <TodoItems
          entries={this.props.messages}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
