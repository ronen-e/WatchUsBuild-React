import React, { Component, PropTypes } from 'react';

export default class Customer extends Component {
    static propTypes = {
        customer: PropTypes.object.isRequired
    }
    render() {
        var { customer } = this.props;
        return (
            <div>
                <h2>{ customer.name }</h2>
            </div>
        );
    }
}
