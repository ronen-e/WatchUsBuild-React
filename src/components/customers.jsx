import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Radium from 'radium';
import fetchCustomersAction from '../state/actions/fetch-customers';
import styles from '../styles/customers';

@connect(({ customers }) => {
    return { customers: customers.map.toList() };
}, (dispatch) => {
    return {
        fetchCustomers: () => dispatch(fetchCustomersAction())
    };
})
@Radium
export default class Customers extends Component {
    static displayName = 'Customers';

    componentWillMount() {
        this.props.fetchCustomers();
    }
    render() {
        const { customers } = this.props;

        if (!customers.size) {
            return null;
        }

        return (
            <div>
                <h1>Customers</h1>
                <div className="master">
                    <Link to="/new-customer" className="btn btn-primary">Add Customer</Link>
                    <ul>
                        {customers.map(customer => (
                            <li key={ customer.id } style={ styles.customerListItem }>
                                <Link to={`/customers/${customer.id}`}>{ customer.name }</Link>
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
