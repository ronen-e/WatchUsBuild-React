import Immutable from 'immutable';
import { Transaction } from './transaction';

var CustomerFields = Immutable.Record({
    id: undefined,
    name: undefined,
    age: undefined,
    gender: undefined,
    imageId: undefined,
    transactions: Immutable.List()
});

export class Customer extends CustomerFields {
    parse(data) {
        if (!data) {
            return this;
        }

        var fields = {};

        [
            'id', 'name', 'age', 'gender', 'imageId'
        ].forEach(field =>
            fields[field] = (data[field] !== undefined) ? data[field] : this.get(field)
        );

        if (data.hasOwnProperty('transactions')) {
            fields.transactions  = Immutable.List(data.transactions.map(item => new Transaction(item)));
        } else {
            fields.transactions = this.transactions;
        }

        var newCustomer = new Customer(fields);
        return Immutable.is(this, newCustomer) ? this : newCustomer;
    }

    getAge() {
        return Date.now() - this.age;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            gender: this.gender,
            imageId: this.imageId,
            transactions: this.transactions.toArray()
        };
    }

    static fromJSON(json) {
        return new Customer().parse(json);
    }

}
