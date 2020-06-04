import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

//MUI stuff
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/EmailTwoTone";
import FaceTwoToneIcon from "@material-ui/icons/FaceTwoTone";
import AlternateEmailTwoToneIcon from "@material-ui/icons/AlternateEmailTwoTone";

//Redux stuff
import { connect } from "react-redux";
import { contactUs } from "../redux/actions/userActions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© Eatira"} {new Date().getFullYear()}
      {""}
    </Typography>
  );
}

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://i.imgur.com/ddyoDDU.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class contactus extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      body: "",
      email: "",
      errors: {},
      isDisabled: false,
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
    this.setState({ isDisabled: true });
    const userData = {
      name: this.state.name,
      body: this.state.body,
      email: this.state.email,
    };
    this.props.contactUs(userData);
    alert(
      "We have received your feedback! We'll get back to you soon if applicable, thanks!"
    );
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <Grid container component="main" className={classes.form}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar
              alt="Eatira"
              src="https://i.imgur.com/hy5nHIp.png"
              className={classes.large}
            />
            <Typography component="h1" variant="h5">
              Get in touch with us
            </Typography>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
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
                autoComplete="name"
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaceTwoToneIcon />
                    </InputAdornment>
                  ),
                }}
              />{" "}
              <br />
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                name="body"
                type="body"
                label="Drop your message"
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
                id="standard-full-width"
                style={{ margin: 8 }}
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
                autoComplete="email"
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailTwoToneIcon />
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
                id="standard-full-width"
                style={{ margin: 8 }}
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.button}
                disabled={this.state.isDisabled}
              >
                Submit
              </Button>
              <br />
              <br />
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
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
