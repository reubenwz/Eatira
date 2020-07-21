import React, { Component } from "react";
import PropTypes from "prop-types";
import Sale from "../components/post/Sale";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { getSaleData } from "../redux/actions/dataActions";

class sale extends Component {
  state = {
    saleIdParam: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const saleId = this.props.match.params.saleId;

    if (saleId) this.setState({ saleIdParam: saleId });

    this.props.getSaleData(handle);
    console.log(this.props.handle);
  }
  render() {
    const { sales } = this.props.data;
    const { saleIdParam } = this.state;

    const salesMarkup =
      sales === null ? (
        <p>No sales yet...</p>
      ) : !saleIdParam ? (
        sales.map((sale) => <Sale key={sale.saleId} sale={sale} />)
      ) : (
        sales.map((sale) => {
          if (sale.saleId !== saleIdParam)
            return <Sale key={sale.saleId} sale={sale} />;
          else return <Sale key={sale.saleId} sale={sale} openDialog />;
        })
      );

    return (
      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <h1>Sales</h1>
          {salesMarkup}
        </Grid>
      </Grid>
    );
  }
}

sale.propTypes = {
  getSaleData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getSaleData })(sale);

//-----------Testing user.js------------------

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import axios from "axios";
// import Order from "../components/post/Order";
// import StaticProfile from "../components/profile/StaticProfile";
// import Grid from "@material-ui/core/Grid";

// import PostSkeleton from "../util/PostSkeleton";
// import ProfileSkeleton from "../util/ProfileSkeleton";

// import { connect } from "react-redux";
// import { getOrderData } from "../redux/actions/dataActions";

// class order extends Component {
//   state = {
//     profile: null,
//     orderIdParam: null,
//   };
//   componentDidMount() {
//     const handle = this.props.match.params.handle;
//     const orderId = this.props.match.params.orderId;

//     if (orderId) this.setState({ orderIdParam: orderId });

//     this.props.getOrderData(handle);
//     axios
//       .get(`/user/${handle}`)
//       .then((res) => {
//         this.setState({
//           profile: res.data.user,
//         });
//       })
//       .catch((err) => console.log(err));
//   }
//   render() {
//     const { orders, loading } = this.props.data;
//     const { orderIdParam } = this.state;

//     const ordersMarkup = loading ? (
//       <PostSkeleton />
//     ) : orders === null ? (
//       <p>No orders yet...</p>
//     ) : !orderIdParam ? (
//       orders.map((order) => <Order key={order.orderId} order={order} />)
//     ) : (
//       orders.map((order) => {
//         if (order.orderId !== orderIdParam)
//           return <Order key={order.orderId} order={order} />;
//         else return <Order key={order.orderId} order={order} openDialog />;
//       })
//     );

//     return (
//       <Grid container spacing={6}>
//         <Grid item sm={6} xs={12}>
//           {ordersMarkup}
//         </Grid>
//         <Grid item sm={4} xs={12}>
//           {this.state.profile === null ? (
//             <ProfileSkeleton />
//           ) : (
//             <StaticProfile profile={this.state.profile} />
//           )}
//         </Grid>
//       </Grid>
//     );
//   }
// }

// order.propTypes = {
//   getOrderData: PropTypes.func.isRequired,
//   data: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   data: state.data,
// });

// export default connect(mapStateToProps, { getOrderData })(order);
