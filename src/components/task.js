import React from 'react';
import Mouse from './renderprops/mouse';
import StarRating from './startrating';

const taskCompleteStyle = {
    textDecoration: "line-through",
};
export default class Task extends React.Component {
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
        let taskStyle = {};
        let task = this.props.data;
        if (task.done) {
            taskStyle = taskCompleteStyle;
        }
        let todoUI = task.edit ? this.editUI(task) : this.displayUI(task);

        return (
            <Mouse render={(mouse) => (
                <li key={task.id} style={taskStyle}
                    onDoubleClick={() => { this.onToggleTask(task.id) }}>
                    <span>{mouse.x},{mouse.y}</span>
                    <span>{todoUI}
                        <button
                            onClick={() => { this.onTodoRemove(task.id) }} >X</button>
                        <button
                            onClick={() => { this.onToggleEdit(task.id) }} >edit</button>
                    </span>
                    <StarRating rating={task.rating}
                        onRatingChange={this.props.onRatingChange} />
                </li>
            )} />

        );
    }
}