import superagent from 'superagent';
// import { Customer } from '../../models/customer';
// import { List as newList } from 'immutable';

function fetchCustomers() {
    return new Promise((resolve, reject) => {
        superagent.get('/api/customers/customers.json')
        .set('Accept', 'application/json')
        .end( function(err, response) {
            if (err) {
                reject(err);
            } else {
                // var parsedData = parse(response.body.data);
                resolve(response.body.data.customers);
            }
            console.info('error', err, 'response', response);
        });
    });
}

// function parse(customers) {
//     return newList(customers.map( (customer) => Customer.fromJSON(customer)));
// }

export default fetchCustomers;
