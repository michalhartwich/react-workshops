import React from 'react';

export default class PostListElement extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.author}</div>
        <div className="panel-body">
          {this.props.title}
        </div>
      </div>
    );
  }
}
