const TOGGLE_THEME_LOCK = 'TOGGLE_THEME_LOCK';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case TOGGLE_THEME_LOCK:
      return {
        ...state,
        themeLocked: action.data,
      };
    default:
      return state;
  }
}

export const toggleThemeLock = data => ({ type: TOGGLE_THEME_LOCK, data });
