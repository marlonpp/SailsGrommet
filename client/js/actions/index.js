import * as types from '../constants/ActionTypes';
import CustomerService from '../services/customerService';

function requestCustomer(customerId) {
  return {
    type: types.CUSTOMER_REQUEST,
    id: customerId
  };
}

function receiveCustomer(customerId, data) {
  return {
    type: types.CUSTOMER_RECEIVE,
    id: customerId,
    data: data
    //devices: data.device
  };
}

//to be handled by thunk middleware
export function fetchCustomer(customerId) {
  return (dispatch) => {
    dispatch(requestCustomer(customerId));
    let customerService = new CustomerService();
    return customerService.getCustomer()
      .end((err, res) => {
        //manager err
        dispatch(receiveCustomer(customerId, res.body));
      });
  };
}

export function toggleDevice(deviceId) {
  return {
    type: types.DEVICE_TOGGLE,
    id: deviceId
  };
}
