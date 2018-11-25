import React from 'react';
import TaskList from './task-list';
import TaskForm from './task-form';
import Photo from './photo';
import WithBorder from './hoc/with-border';
import WithTransparent from './hoc/with-transparent';

export default class TaskApp extends React.Component {
    constructor() {
        super();
        this.onTaskAdd = this.onTaskAdd.bind(this);
        this.onTodoRemove = this.onTodoRemove.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);

        this.state = {
            newTask: "",
            tasks: [
                { id: 1, "title": "Task 1", done: false, edit: false, rating: 5 },
                { id: 2, "title": "Task 2", done: true, edit: false, rating: 0 },
                { id: 3, "title": "Task 3", done: false, edit: false, rating: 2 },
            ]
        }
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


    onRatingChange(taskId, rating) {
        let tasks = this.state.tasks.map((task) => {
            if (task.id === taskId) {
                task.rating = rating;
            }
            return task;
        });

        this.setState({
            tasks
        });
    }

    onTaskAdd(addedTask) {
        let newTask = {
            id: this.state.tasks.length + 1,
            title: addedTask,
            done: false
        }
        this.setState({
            tasks: [newTask, ...this.state.tasks],
            newTask: ""
        });
    }

    render() {
        let BorderedTransPhoto = WithBorder(WithTransparent(Photo));
        return (
            <div>
                <h2>Task App</h2>
                <BorderedTransPhoto />
                <TaskForm onTaskAdd={this.onTaskAdd} />
                <TaskList onRatingChange={this.onRatingChange} tasks={this.state.tasks} />

            </div>
        );

    }
}