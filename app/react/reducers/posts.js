import { postConstants } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case postConstants.INDEX:
      return {
        ...state,
        posts: action.posts,
      };
    case postConstants.DELETE:
      debugger
      return [
        ...state.slice(0, state.findIndex(p => p.id === action.post.id)),
        ...state.slice(state.findIndex(p => p.id === action.post.id) + 1),
      ];
    default:
      return state;
  }
};
