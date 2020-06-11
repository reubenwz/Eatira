import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import DeletePost from "./DeletePost";
import PostDialog from "./PostDialog";
import LikeButton from "./LikeButton";
import PostText from "./PostTextForm";
import OrderButton from "./OrderButton";
import EditQuantity from "./EditQuantity";

//MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";

//Redux
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
  },
  image: {
    height: 140,
    paddingTop: "56.25%",
    borderRadius: "2%",
  },
  imageUploaded: {
    // width: 265,
    height: 265,
    paddingTop: "56.25%",
    borderRadius: "2%",
  },
  caption: {
    maxWidth: 350,
  },
  content: {
    padding: 25,
    objectFit: "cover",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    objectFit: "cover",
  },
  commentCount: {
    position: "absolute",
    left: "46%",
    top: "24%",
    bottom: "8%",
  },
  likeCount: {
    position: "absolute",
    left: "%",
    top: "30%",
    bottom: "10%",
  },
};

class Post extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      post: {
        body,
        text,
        createdAt,
        userImage,
        userHandle,
        postId,
        likeCount,
        commentCount,
        quantity,
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

    const postTextButton =
      authenticated && userHandle === handle ? (
        <PostText postId={postId} />
      ) : null;

    const editQuantityButton =
      authenticated && userHandle === handle ? (
        <EditQuantity postId={postId} />
      ) : null;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Profile Image"
                  className={classes.profileImage}
                >
                  <CardMedia
                    image={userImage}
                    className={classes.profileImage}
                  />
                </Avatar>
              }
              action={deleteButton}
              title={
                <Typography
                  variant="h5"
                  component={Link}
                  to={`/users/${userHandle}`}
                  color="secondary"
                >
                  {userHandle}
                </Typography>
              }
              subheader={
                <Typography variant="body2" color="textSecondary">
                  {dayjs(createdAt).fromNow()}
                </Typography>
              }
            />
            <CardMedia
              image={body}
              title="image"
              className={classes.imageUploaded}
            />

            <span className={classes.caption}>
              <Typography variant="body1">{text}</Typography>
              <Typography variant="body1">{quantity} left</Typography>
              <OrderButton postId={postId} />
            </span>
            {postTextButton}
            {editQuantityButton}

            <CardActionArea>
              <LikeButton postId={postId} />
              <span className={classes.likeCount}>{likeCount} Likes</span>

              <span className={classes.commentCount}>
                {commentCount} comments
              </span>
              <PostDialog
                postId={postId}
                userHandle={userHandle}
                openDialog={this.props.openDialog}
              />
            </CardActionArea>
          </CardContent>
        </CardActionArea>
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
