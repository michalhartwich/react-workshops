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
      <PostsList posts={this.props.getPosts} />
    )
  }
}

PostReciever.propTypes = {
  getPosts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getPosts() {
    dispatch(getPosts());
  },
});

export default connect(null, mapDispatchToProps)(PostReciever);
