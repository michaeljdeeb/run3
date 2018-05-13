const SET_COLORS = 'SET_COLORS';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET_COLORS:
      return {
        accent: action.data.accent,
        accentAlpha: action.data.accentAlpha,
        background: action.data.background,
        backgroundAlpha: action.data.backgroundAlpha,
      };
    default:
      return state;
  }
}

export const setColors = data => ({ type: SET_COLORS, data });
