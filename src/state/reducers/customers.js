import { handleActions } from 'redux-actions';
import { Customer } from '../../models/customer';
import addToList from '../../services/add-to-list';
import { List as newList } from 'immutable';
import { REQUEST_CUSTOMERS_FETCH, RESPONSE_CUSTOMERS_FETCH } from '../actions/fetch-customers';
import { ADD_CUSTOMER } from '../actions/add-customer';
import { DELETE_CUSTOMER } from '../actions/delete-customer';

const initialState = newList();
const addCustomers = addToList({ parser: Customer.fromJSON });

export default handleActions({
	[REQUEST_CUSTOMERS_FETCH]: {

	},
	[RESPONSE_CUSTOMERS_FETCH]: (state, action) => {
		var { customers } = action.payload;
		console.info('[STORE] RESPONSE_CUSTOMERS_FETCH', customers);
		return addCustomers(state, [ ...customers ]);
	},
	[ADD_CUSTOMER]: {

	},
	[DELETE_CUSTOMER]: (state, action) => {
		return { ...state }
	}
}, initialState);
