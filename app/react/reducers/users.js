import { userConstants } from 'constants';

export default (state = [], action) => {
  switch (action.type) {
    case userConstants.CREATE:
      return [
        ...state,
        action.user,
      ];
    case userConstants.DELETE:
      return [
        ...state.slice(0, state.findIndex(u => u.id === action.user.id)),
        ...state.slice(state.findIndex(u => u.id === action.user.id) + 1),
      ];
    case userConstants.UPDATE:
      const user = state.find(u => u.id === action.user.id);
      return [
        ...state.slice(0, state.findIndex(u => u.id === action.user.id)),
        userReducer(user, action),
        ...state.slice(state.findIndex(u => u.id === action.user.id) + 1),
      ];
    default:
      return state;
  }
};
