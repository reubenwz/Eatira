import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Mui stuffs
import Button from "@material-ui/core/Button";
// REdux
import { connect } from "react-redux";
import { order, unorder } from "../../redux/actions/dataActions";

export class OrderButton extends Component {
  ordered = () => {
    if (
      this.props.user.orders &&
      this.props.user.orders.find((order) => order.postId === this.props.postId)
    )
      return true;
    else return false;
  };
  order = () => {
    this.props.order(this.props.postId);
    alert("Your order has been send to the seller!");
  };
  unorder = () => {
    this.props.unorder(this.props.postId);
  };
  render() {
    const { authenticated } = this.props.user;
    const orderButton = !authenticated ? (
      <Link to="/login">
        <Button color="primary" disabled={this.props.quantity <= 0}>
          Order
        </Button>
      </Link>
    ) : this.ordered() ? (
      <Button color="secondary" onClick={this.unorder}>
        Remove Order
      </Button>
    ) : (
      <Button
        color="primary"
        disabled={this.props.quantity <= 0}
        onClick={this.order}
      >
        Order
      </Button>
    );
    return orderButton;
  }
}

OrderButton.propTypes = {
  user: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  order: PropTypes.func.isRequired,
  unorder: PropTypes.func.isRequired,
  quantity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  order,
  unorder,
};

export default connect(mapStateToProps, mapActionsToProps)(OrderButton);
