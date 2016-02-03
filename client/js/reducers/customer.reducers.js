import * as types from '../constants/ActionTypes';

export default function customer(state = {
  isFetching: false,
  id: 6, //hard-coded, get from token instead
  data: {}
}, action = {}) {
  switch (action.type) {
    case types.CUSTOMER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.CUSTOMER_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      });
    case types.DEVICE_TOGGLE:
      return Object.assign({}, state, {
        data: Object.assign({}, state.data, {
          device : [
            ...state.data.device.slice(0, action.id),
            Object.assign({}, state.data.device[action.id], {
              isExpanded: !state.data.device[action.id].isExpanded
            }),
            ...state.data.device.slice(action.id + 1)
          ]
        })
      });
    default:
      return state;
  }
}
