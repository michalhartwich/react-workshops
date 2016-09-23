import { userConstants } from '../constants';
import { userApi } from '../api';

const userCreated = (user) => ({
  type: userConstants.CREATE,
  user,
});

const deletedUser = (user) => ({
  type: userConstants.DELETE,
  user,
});

export const createUser = (email, password) => dispatch => {
  userApi.createUser(email, password)
    .then(result => dispatch(userCreated(result.data)));
}

export const deleteUser = id => dispatch => {
  userApi.deleteUser(id)
    .then(result => dispatch(deletedUser(result.data)));
}
