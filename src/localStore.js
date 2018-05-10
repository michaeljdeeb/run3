export const loadState = () => {
  try {
    const localState = localStorage.getItem('state');
    if (localState === null) {
      return undefined;
    }
    return JSON.parse(localState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const stateString = JSON.stringify(state);
    localStorage.setItem('state', stateString);
  } catch (error) {
    // Maybe log this?
  }
};
