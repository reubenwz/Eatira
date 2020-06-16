import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";

//MUI stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
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
};

class Order extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      cartitem: { body, createdAt, sellerHandle },
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <CardHeader
              title={
                <Typography variant="body2" color="textSecondary">
                  Ordered: {dayjs(createdAt).fromNow()}
                </Typography>
              }
            />
            <CardMedia
              image={body}
              title="image"
              className={classes.imageUploaded}
            />
            <span className={classes.caption}>
              <Typography variant="body1">Seller: {sellerHandle}</Typography>
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

Order.propTypes = {
  user: PropTypes.object.isRequired,
  cartitem: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Order));
