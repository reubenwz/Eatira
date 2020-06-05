import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import DeletePost from "./DeletePost";
import PostDialog from "./PostDialog";
import LikeButton from "./LikeButton";

//MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//Redux
import { connect } from "react-redux";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageUploaded: {
    width: 350,
    height: 350,
    borderRadius: "2%",
  },
  content: {
    padding: 25,
    objectFit: "cover",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    margin: "10px",
    objectFit: "cover",
  },
  commentCount: {
    position: "absolute",
    left: "46%",
    bottom: "8%",
  },
  likeCount: {
    position: "absolute",
    left: "29%",
    bottom: "8%",
  },
};
class Post extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      post: {
        body,
        image,
        createdAt,
        userImage,
        userHandle,
        postId,
        likeCount,
        commentCount,
      },
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeletePost postId={postId} />
      ) : null;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile Image"
          className={classes.profileImage}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="secondary"
          >
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>

          {
            <CardMedia
              image={image}
              title="image"
              className={classes.imageUploaded}
            />
          }
          <Typography variant="body1">{body}</Typography>
          <LikeButton postId={postId} />
          <span className={classes.likeCount}>{likeCount} Likes</span>

          <span className={classes.commentCount}>{commentCount} comments</span>
          <PostDialog
            postId={postId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
          />
        </CardContent>
      </Card>
    );
  }
}

Post.propTypes = {
  user: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Post));
