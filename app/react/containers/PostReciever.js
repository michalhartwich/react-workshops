import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getPosts } from 'actions/posts';

import PostsList from 'components/posts/posts-list'

class PostReciever extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <PostsList posts={this.props.posts} />
    )
  }
}

PostReciever.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
  posts: state.posts.posts,
}};

const mapDispatchToProps = dispatch => ({
  getPosts() {
    dispatch(getPosts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostReciever);
