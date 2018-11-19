import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import { addMessage } from './actions/postActions';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Links = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/items">Items</Link></li>
  </ul>
)

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

  render() {
    return (
        <Router>
        <div className="App">
          <Links />
          <Route exact path="/" render={(props)=>(
            <TodoList
            {...props}
            onSubmit={this.handleSubmit}
            currentItem={this.state.currentItem}
            handleChange={this.handleChange}
            />
          )}
          />
          <Route path="/items" render={(props)=>(
            <TodoItems
              {...props}
              entries={this.props.messages}
              deleteItem={this.deleteItem}
            />
          )}
          />
          </div>

        </Router>

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
