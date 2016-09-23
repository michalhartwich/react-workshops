import React from 'react';
import Button from '../Button';
import { deletePost } from 'actions/posts';
import { connect } from 'react-redux';

export default class PostListElement extends React.Component {
  handleDeleteButtonClick(id) {
    this.props.deletePost(id);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.author} - {this.props.title}</div>
        <div className="panel-body">
          {this.props.content}
          <div className="pull-right">
            <Button onClick={this.handleDeleteButtonClick.bind(this, this.props.id)}>
              x
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
