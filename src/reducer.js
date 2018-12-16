import produce from 'immer';

const initialState = {
  order: {
    customerEmail: '',
    customBikes: [],
  },
};

const UPDATE_ORDER = 'UPDATE_ORDER';
const ADD_BIKE_TO_ORDER = 'ADD_BIKE_TO_ORDER';

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_BIKE_TO_ORDER: {
        draft.order.customBikes.push(action.bike);
        console.log(state);
        console.log(action.bike);
        console.log(draft);
        return;
      }
      case UPDATE_ORDER: {
        if (action.order.customerEmail !== undefined)
          draft.order.customerEmail = action.order.customerEmail;
        if (action.order.customBikes !== undefined)
          draft.order.customBikes = action.order.customBikes;

        console.log(state);
        console.log(draft);
        return;
      }
    }
  });

// export const loadOrders = () => {
//   return {type: LOAD};
// };

// export const createOrder = order => {
//   return {type: CREATE, order};
// };

export const updateOrder = order => {
  return {type: UPDATE_ORDER, order};
};

export const addBikeToOrder = bike => {
  return {type: ADD_BIKE_TO_ORDER, bike};
};
// export const resetOrder = order => {
//   return {type: RESET};
// };
