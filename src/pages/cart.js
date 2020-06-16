import React, { Component } from "react";
import PropTypes from "prop-types";
import Order from "../components/order/Order";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { getUserCartData } from "../redux/actions/dataActions";

class cart extends Component {
  state = {
    postIdParam: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const postId = this.props.match.params.postId;

    if (postId) this.setState({ postIdParam: postId });

    this.props.getUserCartData(handle);
  }
  render() {
    const { cartitem } = this.props.data;
    const { postIdParam } = this.state;

    const cartitemMarkup = !postIdParam
      ? cartitem.map((cartitem) => (
          <Order key={cartitem.postId} cartitem={cartitem} />
        ))
      : cartitem.map((cartitem) => {
          if (cartitem.postId !== postIdParam)
            return <Order key={cartitem.postId} cartitem={cartitem} />;
          else
            return (
              <Order key={cartitem.postId} cartitem={cartitem} openDialog />
            );
        });

    return (
      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          {cartitemMarkup}
        </Grid>
      </Grid>
    );
  }
}

cart.propTypes = {
  getUserCartData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUserCartData })(cart);
