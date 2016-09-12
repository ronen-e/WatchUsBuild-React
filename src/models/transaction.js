import Immutable from 'immutable';

var TransactionFields = Immutable.Record({
    id: undefined,
    itemId: undefined,
    purchaseDate: undefined,
    name: undefined,
    price: undefined,
});

export class Transaction extends TransactionFields {
    parse(data) {
        if (!data) {
            return this;
        }

        var fields = {};

        [
            'id', 'itemId', 'purchaseDate', 'name', 'price'
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
            purchaseDate: this.purchaseDate,
            name: this.name,
            price: this.price
        };
    }
    static fromJSON(json) {
        return new Transaction().parse(json);
    }

}
