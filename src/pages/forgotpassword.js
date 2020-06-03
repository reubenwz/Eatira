import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/icon96.ico";
import MyButton from "../util/MyButton";
//MUI stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/EmailTwoTone";
//Redux stuff
import { connect } from "react-redux";
import { forgotPassword } from "../redux/actions/userActions";

const styles = (theme) => ({
  ...theme.spreadThis,
});

class forgotpassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
    };
    this.props.forgotPassword(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <div
        style={{
          minHeight: 800,
          backgroundImage: `url(https://i.imgur.com/PKQgE81.jpg?1)`,
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
                Forgot Password
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
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                {errors.general && (
                  <Typography variant="body2" className={classes.customError}>
                    {errors.general}
                  </Typography>
                )}
                <MyButton
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  tip="We'll send you an email to this address to reset your password"
                >
                  Send
                </MyButton>
                <br />
                <br />
              </form>
            </Grid>
          </Paper>
          <Grid item sm />
        </Grid>
      </div>
    );
  }
}

forgotpassword.propTypes = {
  classes: PropTypes.object.isRequired,
  forgotPassword: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  forgotPassword,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(forgotpassword));
