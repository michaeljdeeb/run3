const SET_PROGRESS = 'SET_PROGRESS';

const initialState = {
  '1-1': false,
  '1-2': false,
  '1-3': false,
  '2-1': false,
  '2-2': false,
  '2-3': false,
  '3-1': false,
  '3-2': false,
  '3-3': false,
  '4-1': false,
  '4-2': false,
  '4-3': false,
  '5-1': false,
  '5-2': false,
  '5-3': false,
  '6-1': false,
  '6-2': false,
  '6-3': false,
  '7-1': false,
  '7-2': false,
  '7-3': false,
  '8-1': false,
  '8-2': false,
  '8-3': false,
  '9-1': false,
  '9-2': false,
  '9-3': false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PROGRESS: {
      const newState = {
        ...state,
      };
      newState[action.data] = true;

      return newState;
    }
    default:
      return state;
  }
}

export const setProgress = data => ({ type: SET_PROGRESS, data });
