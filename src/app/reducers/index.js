import { SET_POSITIONS, SET_SCROLL_INDICATOR, ANIMATE_SECTION } from '../actions';

const initialState = {
  sections: [],
  showScrollIndicator: false
};

const animationApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITIONS:
      return Object.assign({}, state, {
        sections: action.sections
      });
    case SET_SCROLL_INDICATOR:
      return Object.assign({}, state, {
        showScrollIndicator: action.showHide
      });
    case ANIMATE_SECTION:
      return Object.assign({}, state, {
        sections: state.sections.map((section, index) => {
          if (Number(action.index) === index) {
            return {
              top: state.sections[index].top,
              reveal: true
            };
          }
          return section;
        })
      });
    default:
      return state;
  };
  return state;
};

export default animationApp;
