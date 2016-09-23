import React, { Component } from 'react';
import linkState from 'react-link-state';

class PostForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      author: ''
    }
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="title">Title</label>
          <input id="title" valueLink={linkState(this, 'title')} className="form-control" type="text" placeholder="Title" />
        </div>
        <div className="form-group">
          <label for="content">Content</label>
          <textarea id="content" valueLink={linkState(this, 'content')} className="form-control" rows="3" placeholder="Content" />
        </div>
        <div className="form-group">
          <label for="author">Author</label>
          <input id="author" valueLink={linkState(this, 'author')} className="form-control" type="text" placeholder="Author" />
        </div>
        <button className="btn btn-default" type="submit">Submit</button>
      </form>
    )
  };
}

export default PostForm;
