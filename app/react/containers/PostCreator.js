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
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <PostForm addPost={this.props.addPost} />
        </div>
      </div>
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
