import Immutable from 'immutable';

var TransactionFields = Immutable.Record({
    id: undefined,
    itemId: undefined,
    date: undefined,
    name: undefined,
    payment: undefined,
});

export class Transaction extends TransactionFields {
    parse(data) {
        if (!data) {
            return this;
        }

        var fields = {};

        [
            'id', 'itemId', 'date', 'name', 'payment'
        ].forEach(field =>
            fields[field] = (data[field] !== undefined) ? data[field] : this.get(field)
        );

        var newTransaction = new Transaction(fields);
        return Immutable.is(this, newTransaction) ? this : newTransaction;
    }

    toJSON() {
        return {
            id: this.id,
            itemId: this.itemId,
            date: this.date,
            name: this.name,
            payment: this.payment
        };
    }
    static fromJSON(json) {
        return new Transaction().parse(json);
    }

}
