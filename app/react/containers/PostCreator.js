import React, { Component, PropTypes } from 'react';
import PostForm from 'components/posts/PostForm';
import { connect } from 'react-redux';

import { postActions } from 'actions';

class PostCreator extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
      author: '',
    };
  }

  render() {
    return(
      <PostForm addPost={this.props.addPost} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPost({ title, content, author }) {
    dispatch(postActions.createPost(title, content, author));
  },
});

PostCreator.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(
  null, mapDispatchToProps
)(PostCreator);
