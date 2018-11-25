import React from 'react';
// import PropTypes from 'prop-types';

//&#x2605;
export default class StarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: props.rating
        }
    }

    onRatingChange(val) {
        this.setState({
            rating: val
        });
        console.log("props: ", this.props);
        this.props.onRatingChange(val);
    }

    render() {
        const starUI = [1, 2, 3, 4, 5].map((d) => {
            let fontColor = (d <= this.state.rating) ? "orange" : "gray";
            return (
                <span key={d} style={{ color: fontColor }}
                    onClick={() => this.onRatingChange(d)}>&#x2605;</span>
            );
        });
        return (
            <div>
                {starUI}
            </div>
        );
    }
}

// StarRating.propTypes = {
//     onRatingChange: PropTypes.func.isRequired
// }