import { handleActions } from 'redux-actions';
import { Customer } from '../../models/customer';
import { Map as newMap } from 'immutable';
import { REQUEST_CUSTOMERS_FETCH, RESPONSE_CUSTOMERS_FETCH } from '../actions/fetch-customers';
import { ADD_CUSTOMER } from '../actions/add-customer';
import { DELETE_CUSTOMER } from '../actions/delete-customer';

const initialState = newMap();

export default handleActions({
	[REQUEST_CUSTOMERS_FETCH]: {

	},
	[RESPONSE_CUSTOMERS_FETCH]: (state, action) => {
		var { customers } = action.payload;
		return addCustomers(state, customers);
	},
	[ADD_CUSTOMER]: {

	},
	[DELETE_CUSTOMER]: (state, { payload }) => {
		var { customerId } = payload;
		if (state.has(customerId)) {
			state = state.delete(customerId);
		}
		return state;
	}
}, initialState);

function addCustomers(customersMap, customers) {
	customers.forEach((customer) => {
		if (!customersMap.has(customer.id)) {
			customersMap = customersMap.set(customer.id, Customer.fromJSON(customer));
		}
	});
	return customersMap;
}
