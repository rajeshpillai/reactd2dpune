import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.onTodoRemove = this.onTodoRemove.bind(this);
    this.onTaskAdd = this.onTaskAdd.bind(this);
    this.state = {
      tasks: [
        { id: 1, "title": "Task 1", done: false },
        { id: 2, "title": "Task 2", done: true },
        { id: 3, "title": "Task 3", done: false },
      ]
    }
  }

  onTaskAdd() {
    let newTask = {
      id: this.state.tasks.length + 1,
      title: +new Date(),
      done: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  onTodoRemove(id) {
    let tasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    });

    this.setState({
      tasks: tasks
    });
  }

  render() {
    let taskUI = this.state.tasks.map((task) => {
      return (
        <li key={task.id}>
          <span>{task.title}
            <button onClick={() => { this.onTodoRemove(task.id) }} >X</button></span>
        </li>
      );
    });

    console.log(taskUI);
    return (
      <div>
        <h2>Task App</h2>
        <button onClick={this.onTaskAdd}>New Task</button>
        <ul>
          {taskUI}
        </ul>
      </div>
    );
  }
}

export default App;
