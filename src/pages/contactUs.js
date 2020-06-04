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
import { contactUs } from "../redux/actions/userActions";

const styles = (theme) => ({
  ...theme.spreadThis,
});

class contactus extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      body: "",
      email: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: this.state.name,
      body: this.state.body,
      email: this.state.email,
    };
    this.props.contactUs(userData);
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
                Contact us
              </Typography>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <TextField
                  id="name"
                  name="name"
                  type="name"
                  label="Name"
                  className={classes.textField}
                  helperText={errors.name}
                  error={errors.name ? true : false}
                  value={this.state.name}
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
                <TextField
                  id="body"
                  name="body"
                  type="body"
                  label="body"
                  className={classes.textField}
                  helperText={errors.body}
                  error={errors.body ? true : false}
                  value={this.state.body}
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
                  tip="We'll respond to you as soon as possible."
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

contactus.propTypes = {
  classes: PropTypes.object.isRequired,
  contactUs: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  contactUs,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(contactus));
