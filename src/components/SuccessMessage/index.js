import React from 'react';
import PropTypes from 'prop-types';

class SuccessMessage extends React.Component {

    static propTypes = {
        message: PropTypes.string.isRequired,
    };

    render() {
        return (
            <h4>
                {this.props.message}
            </h4>
        )
    }
}

export default SuccessMessage;