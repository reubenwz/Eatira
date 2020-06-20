import React, { Component } from "react";
import PropTypes from "prop-types";
import Order from "../components/post/Order";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { getOrderData } from "../redux/actions/dataActions";

class order extends Component {
  state = {
    orderIdParam: null,
  };
  componentDidMount() {
    const handle = "Yuki";
    const orderId = this.props.match.params.orderId;

    if (orderId) this.setState({ orderIdParam: orderId });

    this.props.getOrderData(handle);
    console.log("handle: " + handle);
  }
  render() {
    const { orders } = this.props.data;
    const { orderIdParam } = this.state;

    const ordersMarkup =
      orders === null ? (
        <p>No orders yet...</p>
      ) : !orderIdParam ? (
        orders.map((order) => <Order key={order.orderId} order={order} />)
      ) : (
        orders.map((order) => {
          if (order.orderId !== orderIdParam)
            return <Order key={order.orderId} order={order} />;
          else return <Order key={order.orderId} order={order} openDialog />;
        })
      );

    return (
      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <h1>Orders</h1>
          {ordersMarkup}
        </Grid>
      </Grid>
    );
  }
}

order.propTypes = {
  getOrderData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getOrderData })(order);
