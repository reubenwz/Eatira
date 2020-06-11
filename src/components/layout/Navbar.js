import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import PostPost from "../post/PostPost";
import Notifications from "./Notifications";

//Material UI stuff
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

//Icons
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class Navbar extends Component {
  render() {
    const { authenticated, classes } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            {authenticated ? (
              <Fragment>
              <Avatar alt="Eatira" src="https://i.imgur.com/q2hXkFV.jpg" />
                <PostPost />
                <Link to="/home">
                  <MyButton tip="Home">
                    <HomeIcon />
                  </MyButton>
                </Link>

                <Link to="/cart">
                  <MyButton tip="Food Cart">
                    <ShoppingCartIcon />
                  </MyButton>
                </Link>
                <Notifications />
              </Fragment>
            ) : (
              <Container maxWidth="md" component="main">
                <Fragment>
                  <Button color="inherit" component={Link} to="/">
                    <Avatar
                      alt="Eatira"
                      src="https://i.imgur.com/q2hXkFV.jpg"
                    />
                  </Button>
                  <Button color="inherit" component={Link} to="/about">
                    About us
                  </Button>
                  <Button color="inherit" component={Link} to="/features">
                    Dessert Cart
                  </Button>
                  <Button color="inherit" component={Link} to="/faq">
                    FAQ
                  </Button>
                  <Button color="inherit" component={Link} to="/contactUs">
                    Contact Us
                  </Button>
                  <Button color="inherit" component={Link} to="/login">
                    Login
                  </Button>
                  <Button color="inherit" component={Link} to="/signup">
                    Sign Up
                  </Button>
                </Fragment>
              </Container>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
