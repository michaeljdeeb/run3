const SET_COLORS = 'SET_COLORS';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_COLORS:
      return {
        background: action.data.background,
        accent: action.data.accent,
      };
    default:
      return state;
  }
}

export const setColors = data => ({ type: SET_COLORS, data });
