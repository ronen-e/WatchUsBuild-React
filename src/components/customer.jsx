import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import deleteCustomerAction from '../state/actions/delete-customer';

@connect(({ customers }) => {
    return { customers };
}, (dispatch) => {
    return {
        onDelete: (customerId) => dispatch(deleteCustomerAction(customerId))
    };
})
export default class Customer extends Component {
    static displayName = 'Customer';
    static propTypes = {
        customers: PropTypes.object.isRequired
    }
    onDelete(customerId) {
        this.props.onDelete(customerId);
    }
    getTransactions() {
        var customer = this.getCustomer();
        return customer.transactions || [];
    }
    getCustomer() {
        var { customers, params } = this.props;
        var customer = customers.get(Number(params.customerId));
        return customer;
    }
    render() {
        var customer = this.getCustomer();

        if (!customer) {
            return null;
        }

        var transactions = this.getTransactions();
        return (
            <div>
                <h2 style={{ color: 'blue' }}>{ `${customer.id}: ${customer.name}` }</h2>
                <span style={ { cursor: 'pointer' } } onClick={() => this.props.onDelete(customer.id)}>delete customer</span>
                <ul className="transactions-list">
                    {transactions.map(transaction => (
                        <li key={ transaction.id } className="transaction-list-item">
                            <h3>ID: { transaction.id }</h3>
                            <h3>DATE: { transaction.purchaseDate }</h3>
                            <h3>Item ID: { transaction.itemId }</h3>
                            <h3>Item Name: { transaction.name }</h3>
                            <h3>Payment ($): { transaction.price }</h3>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
