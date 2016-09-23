import { counterConstants } from 'constants';

export default (state = 0, action) => {
  switch (action.type) {
    case counterConstants.INCREASE:
      return state + 1;
    case counterConstants.DECREASE:
      return Math.max(state - 1, 0);
    default:
      return state;
  }
};
