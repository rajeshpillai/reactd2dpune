import React from 'react';


export default class TaskForm extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.onTaskAdd = this.onTaskAdd.bind(this);
        this.state = {
            newTask: ""
        }
    }


    handleChange(e) {
        this.setState({
            newTask: e.target.value
        });
    }

    onTaskAdd() {
        this.props.onTaskAdd(this.state.newTask);
        this.setState({
            newTask: ""
        });
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={this.handleChange}
                    value={this.state.newTask} type="text"
                    placeholder="new task" />
                <button onClick={this.onTaskAdd}>New Task</button>
            </React.Fragment>
        );
    }
}