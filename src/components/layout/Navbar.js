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

//Icons
import HomeIcon from "@material-ui/icons/Home";
import NotesIcon from "@material-ui/icons/Notes";

class Navbar extends Component {
  render() {
    const { authenticated, classes } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            {authenticated ? (
              <Fragment>
                <PostPost />
                <Link to="/home">
                  <MyButton tip="Home">
                    <HomeIcon />
                  </MyButton>
                </Link>
                <Link to="/plan">
                  <MyButton tip="Plan a meal">
                    <NotesIcon />
                  </MyButton>
                </Link>
                <Notifications />
              </Fragment>
            ) : (
              <Fragment>
                <Button color="inherit" component={Link} to="/">
                  <Avatar alt="Eatira" src="https://i.imgur.com/q2hXkFV.jpg" />
                </Button>
                <Button color="inherit" component={Link} to="/about">
                  About us
                </Button>
                <Button color="inherit" component={Link} to="/features">
                  Features
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
