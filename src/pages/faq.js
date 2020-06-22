import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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

export default function FAQ() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            <strong>Eatira's FAQ </strong>
            <br />
            <strong>Frequently Asked Questions</strong>
          </Typography>
        </Grid>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <strong>1. Do you deliver to all parts of Singapore?</strong>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Yes, and a flat fee will be charged depending on quantity and
              location. Do contact the bakers that you ordered from for exact
              delivery cost. Self collection is free and available.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              <strong>2. Are our prices inclusive of GST?</strong>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>We do not charge GST for our products.</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              <strong>3. How can I pay?</strong>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              All payments have to be made upon ordering. We accept cash or
              credit/debit card payments through PayLAH and PayNow.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              <strong>4. Where do I make self colletion?</strong>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              The exact address for self collection will be available to you
              once the order has been confirmed.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              <strong>5. Why should I use Eatira?</strong>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <li>Convenience - Get your favourite baked goods in a click!</li>
              <li>
                Personalised Experience - Scroll through a diverse collection of
                bakes by our talented bakers, and support local.
              </li>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br />
        <Typography variant="body1" align="center" gutterBottom>
          More questions?
        </Typography>
        <Button
          variant="contained"
          fullWidth
          align="center"
          color="primary"
          component={Link}
          to="/contactUs"
        >
          Contact us here!
        </Button>
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
