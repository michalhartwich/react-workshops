import { postConstants } from 'constants';

export default (state = [], action) => {
  switch (action.type) {
    case postConstants.CREATE:
      return [
        ...state,
        action.post,
      ]
    case postConstants.GET:
      return {
        ...state,
        post: action.post,
      }
    case postConstants.INDEX:
      return {
        ...state,
        posts: action.posts,
      };
    case postConstants.DELETE:
      return {
        posts: [
          ...state.posts.slice(0, state.posts.findIndex(p => p.id === action.post.id)),
          ...state.posts.slice(state.posts.findIndex(p => p.id === action.post.id) + 1)
        ]
      };
    default:
      return state;
  }
};
