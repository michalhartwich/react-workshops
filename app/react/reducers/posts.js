export default (state = [], action) => {
  switch (action.type) {
    case 'POSTS_INDEX':
      return [
        ...state,
        action.posts,
      ];
    default:
      return state;
  }
};
