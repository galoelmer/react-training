import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class Post extends Component {
  // state = {
  //   post: null,
  // };

  // componentDidMount() {
  //   const id = this.props.match.params.post_id;
  //   axios.get('https://picsum.photos/id/' + id + '/info').then((res) => {
  //     this.setState({ post: res.data });
  //   });
  // }

  render() {
    const imagePost = this.props.post ? (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img
                src={this.props.post.download_url}
                alt={this.props.post.url}
              />
            </div>
            <div className="card-action">
              <a href={this.props.post.url}>Author: {this.props.post.author}</a>
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

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.images.find(image => image.id === id)
  }
}

export default connect(mapStateToProps)(Post);
