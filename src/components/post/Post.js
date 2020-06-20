import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
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
import { addToCart } from "../actions/cartActions";

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
  LikeButton: {
    position: "absolute",
    left: "0%",
    top: "30%",
    bottom: "8%",
  },
  likeCount: {
    position: "absolute",
    left: "20%",
    top: "30%",
    bottom: "8%",
  },
  PostDialog: {
    position: "absolute",
    left: "40%",
    top: "30%",
    bottom: "0%",
  },
  commentCount: {
    position: "absolute",
    left: "60%",
    top: "24%",
    bottom: "8%",
  },
  OrderButton: {
    position: "absolute",
    left: "80%",
    top: "30%",
    bottom: "0%",
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
              <Typography
                variant="body1"
                style={{
                  color: "#b19cd9",
                  fontFamily: "Lucidatypewriter, monospace",
                }}
              >
                {quantity} left
              </Typography>
            </span>
            {postTextButton}
            {editQuantityButton}

            <CardActionArea>
              <span className={classes.LikeButton}>
                <LikeButton postId={postId} />
              </span>
              <span className={classes.likeCount}>{likeCount} Likes</span>
              <span className={classes.PostDialog}>
                <PostDialog
                  postId={postId}
                  userHandle={userHandle}
                  openDialog={this.props.openDialog}
                />
              </span>
              <span className={classes.commentCount}>
                {commentCount} comments
              </span>
              <span className={classes.OrderButton}>
                <OrderButton
                  postId={postId}
                  quantity={quantity}
                  openDialog={this.props.openDialog}
                />
              </span>
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
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (postId) => {
      dispatch(addToCart(postId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Post));
