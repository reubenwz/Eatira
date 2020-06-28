import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import MyButton from "../../util/MyButton";
// MUI Stuff
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import EditIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
// Redux stuff
import { connect } from "react-redux";
import { quantity } from "../../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.spreadThis,
  editQuantityButton: {
    position: "absolute",
    left: "90%",
    bottom: "10%",
  },
  closeButton: {
    position: "absolute",
    left: "80%",
    top: "5%",
  },
});

class EditQuantity extends Component {
  state = {
    quantity: 0,
    errors: {},
    open: false,
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ quantity: 0 });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.quantity(this.props.postId, { quantity: this.state.quantity });
    this.setState({ open: false });
  };

  render() {
    const { classes, authenticated } = this.props;
    const errors = this.state.errors;

    const quantityFormMarkup = authenticated ? (
      <Fragment>
        <Button
          tip="Edit Quantity"
          onClick={this.handleOpen}
          btnClassName={classes.editQuantityButton}
        >
          <EditIcon color="primary" />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          //   fullWidth
          //   maxWidth="sm"
        >
          <DialogTitle>Caption</DialogTitle>
          <DialogActions>
            <MyButton
              tip="Close"
              onClick={this.handleClose}
              tipClassName={classes.closeButton}
            >
              <CloseIcon />
            </MyButton>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="quantity"
                type="quantity"
                label="Enter number of items for sale..."
                multiline="3"
                error={errors.comment ? true : false}
                helperText={errors.comment}
                value={this.state.quantity}
                onChange={this.handleChange}
                fullWidth
                className={classes.textField}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Submit
              </Button>
            </form>
          </DialogActions>
        </Dialog>
      </Fragment>
    ) : null;
    return quantityFormMarkup;
  }
}

EditQuantity.propTypes = {
  quantity: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { quantity })(
  withStyles(styles)(EditQuantity)
);
