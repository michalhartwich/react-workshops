import React from 'react';

export default class PostListElement extends React.Component {
  render() {
    return (
      <div>
        <row>
          <div className="col-md-6">
            {this.props.author}
          </div>
          <div className="col-md-6">
            {this.props.title}
          </div>
        </row>
      </div>
    );
  }
}
