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

  componentWillReceiveProps(nextProps) {
    if (nextProps.posts.length > this.props.posts.length) {
      document.location = `/posts/${nextProps.posts[0].id}`
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = dispatch => ({
  addPost({ title, content, author }) {
    dispatch(postActions.createPost(title, content, author));
  },
});

PostCreator.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(PostCreator);
