import { SET_POSITIONS } from '../actions';

const initialState = {
  positions: {},
};

const animationApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITIONS:
      return Object.assign({}, state, {
        positions: Object.assign(state.positions, action.positions)
      });
    default:
      return state;
  };
  return state;
};

export default animationApp;
