import React, { Component } from 'react';
import PostForm from './PostForm';

class PostCreate extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <PostForm />
        </div>
      </div>
    )
  };
}

export default PostCreate;
