import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import UserRow from 'components/UserRow';
import { userActions } from 'actions';

const UserTable = ({ users, deleteUser }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>E-mail</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {!users.length && (
        <tr className="no-users">
          <td colSpan="5">
            <p className="no-users__text">
              No users to show
            </p>
          </td>
        </tr>
      )}

      {users.map(user => (
        <UserRow
          key={user.id}
          user={user}
          onDeleteUserClick={() => deleteUser(user.id)}
        />
      ))}
    </tbody>
  </table>
);

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  deleteUser(user) {
    dispatch(userActions.deleteUser(user));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);
