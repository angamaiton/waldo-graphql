import { combineReducers } from 'redux';

import { CONSTANTS } from '../actions';

const initialState = {
  pizzas: [],
  isFetching: false,
};

const pizzaHandler = (pizza, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_PIZZA:
      return {
        id: action.id,
        text: action.text,
      };
    default:
      return pizza;
  }
};

const pizzasHandler = (state = initialState.pizzas, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_PIZZA:
      return [
        ...state,
        pizzaHandler(undefined, action),
      ];
    case CONSTANTS.TOGGLE_TOPPING:
      return state.map(todo =>
        pizzaHandler(todo, action),
      );
    default:
      return state;
  }
};

const pizzaListHandler = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.RECEIVE_PIZZAS:
      return Object.assign({}, state, {
        isFetching: false,
        todos: action.pizzas,
      });
    default:
      return state;
  }
};

const pizzaApp = combineReducers({
  pizzaList: pizzaListHandler,
});

export default pizzaApp;

