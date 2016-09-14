import React, { Component } from 'react';
import autobind from 'autobind-decorator';

export default class NewCustomerPage extends Component {
    static displayName = 'NewCustomerPage'
    constructor() {
        super();
        this.state = {
            gender: undefined
        };
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
                    <input placeholder="Name:" ref="name" name="name" />
                    <input placeholder="Age:" ref="age" name="age" />
                    <input placeholder="Image Url:" ref="imageId" name="imageId" />
                    <input type="radio" name="gender" value="male" onChange={ this.onChange } /> Male<br />
                    <input type="radio" name="gender" value="female" onChange={ this.onChange } /> Female<br />
                    <input type="radio" name="gender" value="both" onChange={ this.onChange } /> Both
                    <input type="radio" name="gender" value="other" onChange={ this.onChange } /> Other
                </div>
                <div className="comment-form-actions">
                    <button type="submit">
                        Post comment
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
