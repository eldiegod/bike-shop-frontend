import React, {useContext, useReducer} from 'react';

const StoreContext = React.createContext();

const Provider = props => {
  const {reducer} = props;

  const initialState = reducer(undefined, {
    type: '__STOREHOOK__INIT__',
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {props.children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  /* Grab the state and dispatch function with useContext hook */
  const {state, dispatch} = useContext(StoreContext);

  /* Instead of rendering component, pass an array pair - hook style */
  return [state, dispatch];
};

export {Provider, useStore};
