import React from 'react';
import PostListElement from './post-list-element';

export default class PostListComponent extends React.Component {

  render() {
    var posts = this.props.posts || [];
    return (
      <div>
        {posts.map(post => (
            <PostListElement author={post.author} title={post.title} />
        ))}
      </div>
    );
  }
}
