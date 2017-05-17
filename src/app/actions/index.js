export const SET_POSITIONS = 'SET_POSITIONS';
export const SET_SCROLL_INDICATOR = 'SET_SCROLL_INDICATOR';
export const ANIMATE_SECTION = 'ANIMATE_SECTION';

export const setSectionPositions = (sections) => {
  return { type: SET_POSITIONS, sections };
};

export const animateSection = (index) => {
  return { type: ANIMATE_SECTION, index };
};

export const setScrollIndicator = (showHide) => {
  return { type: SET_SCROLL_INDICATOR, showHide };
};
