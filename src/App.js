import React, { Component } from 'react';
import './App.css';
import TaskApp from './components/task-app';

const taskCompleteStyle = {
  textDecoration: "line-through",
};


class App extends Component {
  render() {
    return (
      <TaskApp />
    );
  }
}

export default App;
