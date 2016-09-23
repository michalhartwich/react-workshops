import { postApi } from '../api'
import { postConstants } from '../constants'

const postsReceived = (posts) => ({
  type: postConstants.INDEX,
  posts,
});

const deletedPost = (post) => ({
  type: postConstants.DELETE,
  post,
});

export const getPosts = () => dispatch => {
  postApi.getPosts()
    .then(result => dispatch(postsReceived(result.data)));
}

export const deletePost = id => dispatch => {
  postApi.deletePost(id)
    .then(result => dispatch(deletedPost(result.data)));
}
