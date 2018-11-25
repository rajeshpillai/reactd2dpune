import React from 'react';

export default class Photo extends React.Component {
    render() {
        return (
            <div>
                Hello, get Surprised. {this.props.boss}
            </div>
        );
    }
}