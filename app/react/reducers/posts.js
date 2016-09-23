export default (state = [], action) => {
  switch (action.type) {
    case 'POSTS_INDEX':
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};
