import React, { Component, PropTypes } from 'react';

export default class Customer extends Component {
    static displayName = 'Customer';
    static propTypes = {
        customer: PropTypes.object.isRequired
    getTransactions() {
        var customer = this.getCustomer();
        return customer.transactions || [];
    }
    getCustomer() {
        var { customers, params } = this.props;
        var customer = customers.find( (item) => item.id === Number(params.customerId) );
        return customer;
    }
    render() {
        var customer = this.getCustomer();
        var transactions = this.getTransactions();
        return (
            <div>
                <h2>{ customer.id }: { customer.name }</h2>
                <span onClick={() => this.onDelete(customer.id)}>delete customer</span>
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
