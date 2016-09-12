import { handleActions } from 'redux-actions';
import { Customer } from '../../models/customer';
import addToList from '../../services/add-to-list';
import { List as newList } from 'immutable';
import { REQUEST_CUSTOMERS_FETCH, RESPONSE_CUSTOMERS_FETCH } from '../actions/fetch-customers';
import { ADD_CUSTOMER } from '../actions/add-customer';

const initialState = newList();
const addCustomers = addToList({ parser: Customer.fromJSON });

export default handleActions({
	[REQUEST_CUSTOMERS_FETCH]: {
		// next: (state, { payload: { customers } }) => addCustomers(state, [ ...customers ])
	},
	[RESPONSE_CUSTOMERS_FETCH]: {
		next: (state, { payload: { customers } }) => addCustomers(state, [ ...customers ])
	},
	[ADD_CUSTOMER]: {
		next: (state, { payload: { customer } }) => addCustomers(state, [ customer ])
	}
}, initialState);
