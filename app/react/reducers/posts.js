import { postConstants } from 'constants';

export default (state = [], action) => {
  switch (action.type) {
    case postConstants.CREATE:
      return [
        ...state,
        action.post,
      ]

    default:
      return state;
  }
};
