import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// MUI Stuff
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// Redux stuff
import { connect } from "react-redux";
import { submitOrder } from "../../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.spreadThis,
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
});

class OrderForm extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    contact: "",
    paymentMethod: "",
    additionalInfo: "",
    errors: {},
    postId: this.props.postId,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({
        name: "",
        address: "",
        email: "",
        contact: "",
        paymentMethod: "",
        additionalInfo: "",
        selectOpen: false,
      });
    }
  }
  handleSelectOpen = () => {
    this.setState({ selectOpen: true });
  };
  handleSelectClose = () => {
    this.setState({ selectOpen: false });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitOrder(this.props.postId, {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      contact: this.state.contact,
      paymentMethod: this.state.paymentMethod,
      additionalInfo: this.state.additionalInfo,
    });
  };

  render() {
    const { classes, authenticated } = this.props;
    const errors = this.state.errors;

    const orderFormMarkup = authenticated ? (
      <Grid item sm={12} style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="name"
            type="text"
            label="Recipient?"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.name}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />
          <TextField
            name="address"
            type="text"
            label="Your address"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.address}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />
          <TextField
            name="email"
            type="text"
            label="Your email"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.email}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />
          <TextField
            name="contact"
            type="text"
            label="Your contact"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.contact}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel id="Type-label">Payment Method</InputLabel>
            <Select
              name="paymentMethod"
              type="text"
              label="paymentMethod"
              onClose={this.handleSelectClose}
              onOpen={this.handleSelectOpen}
              value={this.paymentMethod}
              onChange={this.handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Bank Transfer"}>Bank Transfer</MenuItem>
              <MenuItem value={"Cash On Delivery"}>Cash On Delivery</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            name="additionalInfo"
            type="text"
            label="Any additional info needed for seller to know?"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.additionalInfo}
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
            Submit Order
          </Button>
        </form>
        <hr className={classes.visibleSeparator} />
      </Grid>
    ) : null;
    return orderFormMarkup;
  }
}

OrderForm.propTypes = {
  submitOrder: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { submitOrder })(
  withStyles(styles)(OrderForm)
);
