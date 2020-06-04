import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/icon96.ico";
import { Link } from "react-router-dom";
//MUI stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/LockTwoTone";
import AlternateEmailTwoToneIcon from "@material-ui/icons/AlternateEmailTwoTone";

//Redux stuff
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

const styles = (theme) => ({
  ...theme.spreadThis,
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <div
        style={{
          minHeight: 800,
          backgroundImage: `url(https://i.imgur.com/uaKHhyH.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      >
        <Grid container className={classes.form}>
          <Grid item sm />
          <Paper elevation={12}>
            <Grid item sm>
              <img src={AppIcon} alt="Eatira icon" className={classes.image} />
              <Typography variant="h5" className={classes.pageTitle}>
                Login
              </Typography>
              <form noValidate onSubmit={this.handleSubmit}>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  className={classes.textField}
                  helperText={errors.email}
                  error={errors.email ? true : false}
                  value={this.state.email}
                  onChange={this.handleChange}
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailTwoToneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  className={classes.textField}
                  helperText={errors.password}
                  error={errors.password ? true : false}
                  value={this.state.password}
                  onChange={this.handleChange}
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.general && (
                  <Typography variant="body2" className={classes.customError}>
                    {errors.general}
                  </Typography>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  disabled={loading}
                >
                  Login
                  {loading && (
                    <CircularProgress size={30} className={classes.progress} />
                  )}
                </Button>
                <br />
                <br />
                <Link to="/forgotpassword" variant="body2">
                  Forgot password?
                  <br />
                </Link>
                New to Eatira? Sign up <Link to="/signup">here.</Link>
              </form>
            </Grid>
          </Paper>
          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
