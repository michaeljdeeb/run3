const SET_LAST_VIEWED = 'SET_LAST_VIEWED';
const UNSET_LAST_VIEWED = 'UNSET_LAST_VIEWED';

export default function reducer(state = '/', action = {}) {
  switch (action.type) {
    case SET_LAST_VIEWED:
      return action.data;
    case UNSET_LAST_VIEWED:
      return '/';
    default:
      return state;
  }
}

export const setLastViewed = data => ({ type: SET_LAST_VIEWED, data });
export const unsetLastViewed = () => ({ type: UNSET_LAST_VIEWED });
