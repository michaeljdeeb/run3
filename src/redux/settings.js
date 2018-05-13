const TOGGLE_THEME_LOCK = 'TOGGLE_THEME_LOCK';
const TOGGLE_TTS = 'TOGGLE_TTS';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case TOGGLE_TTS:
      return {
        ...state,
        tts: action.data,
      };
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
export const toggleTts = data => ({ type: TOGGLE_TTS, data });
