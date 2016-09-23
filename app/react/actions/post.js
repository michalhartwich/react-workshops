import { postConstants } from '../constants';
import { postApi } from '../api';

const postCreated = (post) => ({
  type: postConstants.CREATE,
  post,
})

const postGot = (post) => ({
  type: postConstants.GET,
  post
})

export const createPost = (title, content, author) => dispatch => {
  postApi.createPost(title, content, author)
    .then(result => dispatch(postCreated(result.data)));
}

export const getPost = (id) => dispatch => {
  postApi.getPost(id)
    .then(result => dispatch(postGot(result.data)));
}
