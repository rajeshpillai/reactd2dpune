import React, { Component } from 'react';
import './App.css';

const taskCompleteStyle = {
  textDecoration: "line-through",
};


class App extends Component {
  constructor() {
    super();
    this.onTodoRemove = this.onTodoRemove.bind(this);
    this.onTaskAdd = this.onTaskAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.state = {
      newTask: "",
      tasks: [
        { id: 1, "title": "Task 1", done: false, edit: false },
        { id: 2, "title": "Task 2", done: true, edit: false },
        { id: 3, "title": "Task 3", done: false, edit: false },
      ]
    }
  }
  handleChange(e) {
    this.setState({
      newTask: e.target.value
    });
  }

  onTaskAdd() {
    let newTask = {
      id: this.state.tasks.length + 1,
      title: this.state.newTask,
      done: false
    }
    this.setState({
      tasks: [newTask, ...this.state.tasks],
      newTask: ""
    });
  }

  onTodoRemove(id) {
    let tasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    });

    this.setState({
      tasks: tasks
    });
  }

  onToggleTask(taskId) {
    let tasks = this.state.tasks.map((task) => {
      if (task.id === taskId) {
        task.done = !task.done;
      }
      return task;
    });

    this.setState({
      tasks
    });
  }

  onInputKeyDown(e) {
    if (e.which === 13) {  //enter key
      let editTask = this.editInput.value;

      let tasks = this.state.tasks.map((t) => {
        if (t.edit) {
          t.title = editTask;
          t.edit = false;
        }
        return t;
      });

      this.setState({
        tasks
      });

    }
  }

  onToggleEdit(taskId) {
    let tasks = this.state.tasks.map((task) => {
      if (task.id === taskId) {
        task.edit = !task.edit;
      }
      return task;
    });

    this.setState({
      tasks
    });
  }


  editUI(task) {
    return (
      <input type="text" ref={(editInput) => { this.editInput = editInput }}
        onKeyDown={this.onInputKeyDown} defaultValue={task.title} />
    );
  }

  displayUI(task) {
    return (
      <span>{task.title}</span>
    );
  }
  render() {
    let taskUI = this.state.tasks.map((task) => {
      let taskStyle = {};
      if (task.done) {
        taskStyle = taskCompleteStyle;
      }

      let todoUI = task.edit ? this.editUI(task) : this.displayUI(task);

      return (
        <li key={task.id} style={taskStyle}
          onDoubleClick={() => { this.onToggleTask(task.id) }}>
          <span>{todoUI}
            <button
              onClick={() => { this.onTodoRemove(task.id) }} >X</button>
            <button
              onClick={() => { this.onToggleEdit(task.id) }} >edit</button>
          </span>
        </li>

      );
    });

    console.log(taskUI);
    return (
      <div>
        <h2>Task App</h2>
        <input onChange={this.handleChange}
          value={this.state.newTask} type="text" placeholder="new task" />
        <button onClick={this.onTaskAdd}>New Task</button>
        <ul>
          {taskUI}
        </ul>
      </div>
    );
  }
}

export default App;
