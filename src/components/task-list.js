import React from 'react';
import Task from './task';



export default class TaskList extends React.Component {

    render() {
        let tasks = this.props.tasks;
        let taskUI = tasks.map((task) => {
            return (
                <Task data={task} />
            );
        });

        console.log(taskUI);
        return (
            <ul>
                {taskUI}
            </ul>
        );

    }
}