import React from 'react';
import Task from './task';

export default function TaskList(props) {
    let tasks = props.tasks;
    let taskUI = tasks.map((task) => {
        return (
            <Task key={task.id} data={task} />
        );
    });
    return (
        <ul>
            {taskUI}
        </ul >
    );
}