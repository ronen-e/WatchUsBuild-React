import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { List as newList } from 'immutable';
import fetchCustomers from '../services/fetch-customers';

export default class Customers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: newList()
        };
    }
    componentWillMount() {
        this.fetchCustomers();
    }
    async fetchCustomers() {
        var customers = await fetchCustomers();
        console.info('customers', customers);
        this.setState({ customers });
    }
    render() {
        const { customers } = this.state;

        if (!customers.count()) {
            return null;
        }

        return (
            <div>
                <h1>Customers</h1>
                <div className="master">
                    <ul>
                        {customers.map(customer => (
                            <li key={ customer.id }>
                                <Link to={`/customer/${customer.id}`}>{ customer.name }</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="detail">
                    { this.props.children }
                </div>
            </div>
        );
    }
}
