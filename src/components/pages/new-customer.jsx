import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';

export default class NewCustomerPage extends Component {
    static displayName = 'NewCustomerPage'
    constructor() {
        super();
        this.state = {
            gender: undefined
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.customers !== this.props.customers) {
            browserHistory.push('/customers');
        }
    }

    @autobind
    onChange(event) {
        const value = event.target.value;
        const key = event.target.name;

        this.setState({ [key]: value });
    }

    render() {
        return (
            <form ref="form" className="comment-form new-customer-form" onSubmit={ this.handleSubmit }>
                <label>New Customer</label>
                <div className="comment-form-fields">
                    <div className="form-group">
                        <input placeholder="Name:" ref="name" name="name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input placeholder="Age:" ref="age" name="age" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input placeholder="Image Url:" ref="imageId" name="imageId" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="radio-inline"><input type="radio" name="gender" value="male" onChange={ this.onChange } /> Male</label>
                        <label className="radio-inline"><input type="radio" name="gender" value="female" onChange={ this.onChange } /> Female</label>
                    </div>

                </div>
                <div className="comment-form-actions">
                    <button type="submit" className="btn">
                        Create Customer
                    </button>
                </div>
            </form>
        );
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();
        var name = this.refs.name.value;
        var age = Number(this.refs.age.value);
        var imageId = this.refs.imageId.value;
        var { gender } = this.state;

        this.props.addCustomer({ name, age, imageId, gender });
        this.refs.form.reset();
    }
}
