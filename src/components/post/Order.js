import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";

//MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

//Redux
import { connect } from "react-redux";

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

class Order extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      order: {
        name,
        address,
        email,
        contact,
        paymentMethod,
        additionalInfo,
        createdAt,
        userHandle,
      },
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body1">Recipient: {name}</Typography>
            <Typography variant="body1">Address: {address}</Typography>
            <Typography variant="body1">Email: {email}</Typography>
            <Typography variant="body1">Contact: {contact}</Typography>
            <Typography variant="body1">
              Payment Method: {paymentMethod}
            </Typography>
            <Typography variant="body1">
              Additional Info: {additionalInfo}
            </Typography>
            <Typography variant="body1">Ordered at: {createdAt}</Typography>
            <Typography variant="body1">Username: {userHandle}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

Order.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Order));
