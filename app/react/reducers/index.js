import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import users from 'reducers/users';
import posts from 'reducers/posts';

export default combineReducers({
  counter,
  users,
  posts,
});
