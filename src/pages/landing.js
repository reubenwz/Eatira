import React from "react";
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
import { Link } from "react-router-dom";

import icon1 from "../images/planAMeal.png";
import icon2 from "../images/foc.png";
import icon3 from "../images/shareOnline.png";

//Icons
import ForwardIcon from "@material-ui/icons/Forward";

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

export default function Landing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
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
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            eat() at where you love
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textPrimary"
            component="p"
          >
            Share your food passion.
          </Typography>{" "}
          <br />
          <div align="center">
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/signup"
              startIcon={<ForwardIcon />}
            >
              Get Started
            </Button>
          </div>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid
            container
            spacing={5}
            alignItems="flex-end"
            justify="center"
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Card width="30%" height="30%">
                <CardHeader
                  title="Plan A Meal"
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
                      The fastest decision to dine at your favourite restaurant
                      in one click.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card width="30%" height="30%">
                <CardHeader
                  title="Always Free"
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
                      Of course it's completely free for you, and non-hassle.
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Card width="30%" height="30%">
                <CardHeader
                  title="Sharing Online"
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
                      See your friends, family & colleagues' meal posts!
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
