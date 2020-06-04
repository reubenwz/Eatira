import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { Link } from "react-router-dom";

function Copyright() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" color="textPrimary" align="center">
        {"© "}
        <MuiLink color="inherit" component={Link} to="/">
          Eatira
        </MuiLink>{" "}
        {new Date().getFullYear()}
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardLanding: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  img: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    justifyContent: "center",
  },
  gridContainer: {
    justifyContent: "center",
  },
}));

const footers = [
  {
    title: "COMPANY",
    description: ["About Us"],
  },
  {
    title: "HELP",
    description: ["FAQ", "Contact Us"],
  },
];

export default function ContactUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            <strong>Enjoy this Eatira App ?</strong> <br />
            <strong>We'd like to hear your opinion about it !</strong>
          </Typography>
        </Grid>
        <div>
          <TextField
            id="standard-full-width"
            label="Name"
            style={{ margin: 8 }}
            placeholder="Name"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            color="secondary"
          />
          <TextField
            id="standard-full-width"
            label="Opinion"
            style={{ margin: 8 }}
            placeholder="Write Something..."
            //helperText="Write Something..."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            color="secondary"
          />
          <TextField
            id="standard-full-width"
            label="Email Address"
            style={{ margin: 8 }}
            placeholder="email@gmail.com"
            //helperText="email@gmail.com"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            color="secondary"
          />
          <div align="center">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/signup"
            >
              Submit
            </Button>
          </div>
        </div>
      </Container>
      {/* End hero unit */}

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          <Avatar
            alt="Eatira"
            src="https://i.imgur.com/q2hXkFV.jpg"
            className={classes.large}
          />
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
