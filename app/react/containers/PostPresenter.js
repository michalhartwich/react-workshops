import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { postActions } from 'actions';

class PostPresenter extends Component {
  componentWillMount() {
    this.props.getPost(this.props.id)
  };

  render() {
    if (this.props.post !== undefined) {
      return (
        <div>
          <h1>
            {this.props.post.title}
          </h1>
          <p>
            {this.props.post.content}
          </p>
          <p>
            by <em>{this.props.post.author}</em>
          </p>
        </div>
      )
    }
    else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

PostPresenter.propTypes = {
  post: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    id: state.posts.id,
    post: state.posts.post,
  }};

const mapDispatchToProps = dispatch => ({
  getPost(id) {
    dispatch(postActions.getPost(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPresenter);
