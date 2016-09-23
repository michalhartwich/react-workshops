import React, { Component } from 'react';

class PostForm extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="title">Title</label>
          <input id="title" className="form-control" type="" placeholder="Title" />
        </div>
        <div className="form-group">
          <label for="content">Content</label>
          <textarea id="content" className="form-control" rows="3" placeholder="Content" />
        </div>
        <div className="form-group">
          <label for="author">Author</label>
          <input id="author" className="form-control" type="" placeholder="Author" />
        </div>
        <button className="btn btn-default" type="submit">Submit</button>
      </form>
    )
  };
}

export default PostForm;
