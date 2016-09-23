import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

const createApi = (url) => axios.create({
  baseURL: url,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  responseType: 'json',
});

export function getPosts() {
  return createApi(BASE_URL).get(`/posts`);
}

export function deletePost(postId) {
  return createApi(BASE_URL).delete(`/users/${postId}`);
}
