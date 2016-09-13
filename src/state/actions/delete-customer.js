export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export default function deleteCustomer({ customer }) {
    return function(dispatch, getState) {
        dispatch({
            type: DELETE_CUSTOMER,
            payload: { customer }
        });
    };
}

export function deleteCustomerError({ error }) {
    return {
        type: DELETE_CUSTOMER,
        payload: { error },
        error: true
    };
}
