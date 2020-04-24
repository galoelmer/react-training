import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    const id = this.props.match.params.post_id;
    axios.get('https://picsum.photos/id/' + id + '/info').then((res) => {
      this.setState({ post: res.data });
    });
  }

  render() {
    const imagePost = this.state.post ? (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img
                src={this.state.post.download_url}
                alt={this.state.post.url}
              />
            </div>
            <div className="card-action">
              <a href={this.state.post.url}>Author: {this.state.post.author}</a>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="container center">No image post available</div>
    );
    return <div className="container">{imagePost}</div>;
  }
}

export default Post;
