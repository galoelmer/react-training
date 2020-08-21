import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
// import MyButton from '../util/MyButton';
import DeleteScream from '../components/DeleteScream';
import ScreamDialog from './ScreamDialog';
import LikeButton from './LikeButton';

// Material UI components
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

// Icons
// import ChatIcon from '@material-ui/icons/Chat';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

// Redux
import { connect } from 'react-redux';
// import { likeScream, unlikeScream } from '../redux/actions/dataActions';

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20,
  },
  image: {
    padding: 25,
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectFit: 'cover',
  },
};

export class Scream extends Component {
  // likedScream = () => {
  //   if (
  //     this.props.user.likes &&
  //     this.props.user.likes.find(
  //       (like) => like.screamId === this.props.scream.screamId
  //     )
  //   )
  //     return true;
  //   else return false;
  // };

  // likeScream = () => {
  //   this.props.likeScream(this.props.scream.screamId);
  // };

  // unlikeScream = () => {
  //   this.props.unlikeScream(this.props.scream.screamId);
  // };

  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: {
        // body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        // likesCount,
        // commentsCount,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    // const likeButton = !authenticated ? (
    //   <MyButton tip="Like">
    //     <Link to="/login">
    //       <FavoriteBorder color="primary" />
    //     </Link>
    //   </MyButton>
    // ) : this.likedScream() ? (
    //   <MyButton tip="Undo like" onClick={this.unlikeScream}>
    //     <FavoriteIcon color="primary" />
    //   </MyButton>
    // ) : (
    //   <MyButton tip="Like" onClick={this.likeScream}>
    //     <FavoriteBorder color="primary" />
    //   </MyButton>
    // );

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteScream screamId={screamId} />
      ) : null;

    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile Image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <LikeButton scream={this.props.scream} />
          {/* <span>{likesCount} Likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentsCount} comments</span> */}
          <ScreamDialog screamId={screamId} userHandle={userHandle} />
        </CardContent>
      </Card>
    );
  }
}

Scream.propTypes = {
  // likeScream: PropTypes.func.isRequired,
  // unlikeScream: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

// const mapActionsToProps = {
//   likeScream,
//   unlikeScream,
// };

export default connect(
  mapStateToProps
  // mapActionsToProps
)(withStyles(styles)(Scream));
