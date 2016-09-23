import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Button from 'components/Button';
import { userActions } from 'actions';

class UserCreator extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onAddUser(e) {
    e.preventDefault();
    this.props.addUser({
      email: this.state.email,
      password: this.state.password,
    });
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    return (
      <div className="user-creator">
        <h3>
          Add new user
        </h3>
        <form onSubmit={this.onAddUser.bind(this)}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              onChange={this.onEmailChange.bind(this)}
              value={this.state.email}
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={this.onPasswordChange.bind(this)}
              value={this.state.password}
              id="password"
              className="form-control"
              minLength="6"
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

UserCreator.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addUser({ email, password }) {
    dispatch(userActions.createUser(email, password));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(UserCreator);
