import React, { PropTypes } from 'react';
import Button from 'components/Button';

const UserRow = ({ user, onDeleteUserClick }) => (
  <tr className="user-row">
    <td className="user-row__id">{user.id}</td>
    <td className="user-row__email">{user.email}</td>
    <td className="user-row__created_at">{user.created_at}</td>
    <td className="user-row__updated_at">{user.updated_at}</td>
    <td className="user-row__action">
      <Button onClick={onDeleteUserClick}>
        Remove user
      </Button>
    </td>
  </tr>
);

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
  onDeleteUserClick: PropTypes.func.isRequired,
}

export default UserRow;
