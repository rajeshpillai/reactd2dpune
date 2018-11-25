import React from 'react';

const style = {
    opacity: "0.4"
}
const withTransparent = (WrappedComponent) => {
    return class extends React.Component {
        static displayName = "withTransparent";
        state = {
            boss: "trans"
        }
        render() {
            return (
                <div style={style}>
                    <WrappedComponent {...this.props}
                        boss={this.state.boss} />
                </div>
            );
        }
    }
}

export default withTransparent;