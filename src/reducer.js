import produce from 'immer';

const initialState = {
  order: {
    customerEmail: '',
    customBikes: [],
  },
};

const UPDATE_ORDER = 'UPDATE_ORDER';
const ADD_BIKE_TO_ORDER = 'ADD_BIKE_TO_ORDER';
const REMOVE_BIKE_FROM_ORDER = 'REMOVE_BIKE_FROM_ORDER';
const UPDATE_CUSTOMER_EMAIL_FROM_ORDER = 'UPDATE_CUSTOMER_EMAIL_FROM_ORDER';
const RESET_ORDER = 'RESET_ORDER';

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REMOVE_BIKE_FROM_ORDER: {
        if (action.index > -1) {
          draft.order.customBikes.splice(action.index, 1);
        }
        return;
      }
      case ADD_BIKE_TO_ORDER: {
        draft.order.customBikes.push(action.bike);
        // console.log(state);
        // console.log(action.bike);
        // console.log(draft);
        return;
      }
      case UPDATE_CUSTOMER_EMAIL_FROM_ORDER: {
        if (action.customerEmail !== undefined) draft.order.customerEmail = action.customerEmail;
        return;
      }
      case UPDATE_ORDER: {
        if (action.order.customerEmail !== undefined) draft.order.customerEmail = action.order.customerEmail;
        if (action.order.customBikes !== undefined) draft.order.customBikes = action.order.customBikes;

        // console.log(state);
        // console.log(draft);
        return;
      }
      case RESET_ORDER: {
        return {...initialState};
      }
    }
  });

export const updateOrder = order => {
  return {type: UPDATE_ORDER, order};
};

export const addBikeToOrder = bike => {
  return {type: ADD_BIKE_TO_ORDER, bike};
};

export const removeBikeFromOrder = index => {
  return {type: REMOVE_BIKE_FROM_ORDER, index};
};

export const updateCustomerEmailFromOrder = customerEmail => {
  return {type: UPDATE_CUSTOMER_EMAIL_FROM_ORDER, customerEmail};
};

export const resetOrder = () => {
  return {type: RESET_ORDER};
};
