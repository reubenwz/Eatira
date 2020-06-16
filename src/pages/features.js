import React from "react";
import Avatar from "@material-ui/core/Avatar";
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
import { Link } from "react-router-dom";

import icon1 from "../images/select.png";
import icon2 from "../images/review.png";
import icon3 from "../images/checkout.png";
import icon4 from "../images/complete.png";

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
      theme.palette.type === "dark"
        ? theme.palette.grey[100]
        : theme.palette.grey[300],
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

export default function Features() {
  const classes = useStyles();

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

        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <br />
          <br />
          <Grid item xs={12}>
            <Typography variant="h3" align="center" gutterBottom>
              <strong>Dessert Cart</strong>
            </Typography>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="flex-end"
            justify="center"
            className={classes.gridContainer}
          >
            <Grid item xs={6} sm={3} md={3}>
              <Card width="30%" height="30%">
                <CardHeader
                  title="Select Items"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div>
                    <img
                      src={icon1}
                      alt="icon1"
                      align="center"
                      className={classes.img}
                    />
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      component="p"
                      align="center"
                    >
                      Choose the dessert that you would like to order.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <Card width="30%" height="30%">
                <CardHeader
                  title="Review Items"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div>
                    <img src={icon2} alt="icon2" className={classes.img} />
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      component="p"
                      align="center"
                    >
                      Double check the items you have ordered.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={3} md={3}>
              <Card width="30%" height="30%">
                <CardHeader
                  title="Checkout"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div>
                    <img src={icon3} alt="icon3" className={classes.img} />
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      component="p"
                      align="center"
                    >
                      Input your address and payment method.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <Card width="30%" height="30%">
                <CardHeader
                  title="Confirm Order"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div>
                    <img
                      src={icon4}
                      alt="icon4"
                      align="center"
                      className={classes.img}
                    />
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      component="p"
                      align="center"
                    >
                      You should receive an e-mail confirming your order within
                      a couple of hours.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

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
