import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

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

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };

  render() {
    const imagePost = this.props.post ? (
      <div className="row">
        <div className="col s12 m10 offset-m1 l8 offset-l2">
          <div className="card">
            <div className="card-image">
              <img
                className="responsive-img"
                src={this.props.post.download_url}
                alt={this.props.post.url}
              />
            </div>
            <div className="card-action">
              <a href={this.props.post.url}>Author: {this.props.post.author}</a>
            </div>
          </div>
          <div className="center">
            <button
              onClick={this.handleClick}
              className="waves-effect waves-light btn-small"
            >
              Delete
            </button>
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
    post: state.images.find((image) => image.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
