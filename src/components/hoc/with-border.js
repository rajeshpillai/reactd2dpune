import React from 'react';

const style = {
    border: "2px dashed red"
}
const withDashedBorder = (WrappedComponent) => {
    return class extends React.Component {
        static displayName = "withDashedBorder";
        state = {
            boss: "dashed"
        }
        render() {
            return (
                <div style={style}>
                    <WrappedComponent {...this.props} boss={this.state.boss} />
                </div>
            );
        }
    }
}

export default withDashedBorder;