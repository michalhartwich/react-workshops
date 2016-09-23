import { postConstants } from '../constants';
import { postApi } from '../api';

const postCreated = (post) => ({
  type: postConstants.CREATE,
  post,
})

export const createPost = (title, content, author) => dispatch => {
  postApi.createPost(title, content, author)
    .then(result => dispatch(postCreated(result.data)));
}
