import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import SentimentVerySatisfiedRoundedIcon from "@material-ui/icons/SentimentVerySatisfiedRounded";
import { Link } from "react-router-dom";

function Copyright() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" color="textSecondary" align="center">
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

export default function AboutUs() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      <CssBaseline />
      <div
        style={{
          backgroundImage: `url(https://i.imgur.com/uaKHhyH.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100wh",
        }}
      >
        {/* Hero unit */}
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                variant="h5"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                <strong>Hello! We are Eatira</strong> <br />
                <SentimentVerySatisfiedRoundedIcon />
              </Typography>
              <Typography
                className={classes.pos}
                color="textSecondary"
                align="center"
              >
                Joined in 2020
              </Typography>
              <Typography variant="subtitle1" component="h2" align="center">
                <strong>We love food {bull} food connects people</strong>
              </Typography>
              <br />
              <Typography
                variant="body2"
                component="p"
                color="textSecondary"
                align="center"
              >
                Our goal is to help our users find the <strong>best</strong>{" "}
                food social media application that can <strong>automate</strong>{" "}
                all these painful processes of selecting a restaurant & decide
                on the <strong>best</strong> menu to fit your requests.
              </Typography>
              <br />
              <Typography variant="subtitle1" component="h2" align="center">
                <strong>Founders, Reuben & Yuki</strong>
              </Typography>
            </CardContent>
          </Card>
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
      </div>
      {/* End footer */}
    </React.Fragment>
  );
}
