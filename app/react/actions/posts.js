import { postApi } from '../api'


const postsReceived = (posts) => ({
  type: 'POSTS_INDEX',
  posts,
});

export const getPosts = () => dispatch => {
  postApi.getPosts()
    .then(result => dispatch(postsReceived(result.data)));
}
