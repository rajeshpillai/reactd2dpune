import React from 'react';
import Task from './task';
import Modal from './modal';

export default class TaskList extends React.Component {
    state = {
        show: false
    }

    constructor() {
        super();
        this.showModal = this.showModal.bind(this);
        this.onClose = this.onClose.bind(this);
    }



    showModal() {
        this.setState({
            show: true
        });
    }

    onClose() {
        this.setState({
            show: false
        });
    }
    render() {
        let tasks = this.props.tasks;
        let taskUI = tasks.map((task) => {
            return (
                <div>
                    <Task key={task.id} data={task} />
                    <button onClick={this.showModal}>Show Task</button>
                    <Modal
                        onClose={this.onClose}
                        show={this.state.show}>
                        <Task key={task.id} data={task} />
                    </Modal>
                </div>
            );
        });
        return (
            <ul>
                {taskUI}
            </ul >
        );
    }

}