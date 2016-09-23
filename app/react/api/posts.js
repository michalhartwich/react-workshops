import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

const createApi = (url) => axios.create({
  baseURL: url,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  responseType: 'json',
});

export function createPost(title, content, author) {
  return createApi(BASE_URL).post(`/posts`, {
    title,
    content,
    author,
  });
}
