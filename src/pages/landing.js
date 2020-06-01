import React from "react";
import AppBar from "@material-ui/core/AppBar";
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

import icon1 from "../images/icon1.jpg";
import icon2 from "../images/icon2.jpg";
import icon3 from "../images/icon3.jpg";
import AppIcon from "../images/icon96.ico";
//Icons
//import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ForwardIcon from "@material-ui/icons/Forward";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Eatira
      </MuiLink>{" "}
      {new Date().getFullYear()}
    </Typography>
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
  cardPricing: {
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
  },
  gridContainer: {
    justifyContent: "center",
  },
}));

// const tiers = [
//   {
//     title: "Plan A Meal",
//     img: icon1,
//     description: ["Find the best nearby restaurants that you love quickly."],
//   },
//   {
//     title: "Always Free",
//     img: icon2,
//     description: ["Of course it's completely free for you, and non-hassle."],
//   },
//   {
//     title: "Sharing Online",
//     img: icon3,
//     description: ["See what your friends, family & colleagues' are having!"],
//   },
// ];
const footers = [
  {
    title: "Company",
    description: ["About Us"],
  },
  {
    title: "Help",
    description: ["FAQ", "Contact Us"],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div
        style={{
          minHeight: 700,
          padding: "0.2em 0em",
          backgroundImage: `url(https://i.imgur.com/QhaTVVJ.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "centre",
          height: "100%",
          width: "100",
        }}
      >
        {/* Hero unit */}
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
            color="textSecondary"
            component="p"
          >
            Share your food passion.
          </Typography>{" "}
          <br />
          <div align="center">
            <Button
              color="inherit"
              component={Link}
              to="/signup"
              startIcon={<ForwardIcon />}
            >
              Get Started
            </Button>
          </div>
        </Container>
        {/* End hero unit */}
        {/* <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography
                        component="h2"
                        variant="h3"
                        color="textPrimary"
                      >
                        {tier.image}
                      </Typography>
                    </div>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}
        <Grid container spacing={4} className={classes.gridContainer}>
          <Grid item>
            <Card width="25%">
              <CardHeader
                title="Plan a meal"
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                className={classes.cardHeader}
              />
              <CardContent>
                <div>
                  <img src={icon1} alt="icon1" className={classes.img} />
                </div>
                <div></div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card width="25%">
              <CardHeader
                title="Always free"
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                className={classes.cardHeader}
              />
              <CardContent>
                <div>
                  <img src={icon2} alt="icon1" className={classes.img} />
                </div>
                <div></div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card width="25%">
              <CardHeader
                title="Plan a meal"
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                className={classes.cardHeader}
              />
              <CardContent>
                <div>
                  <img src={icon3} alt="icon1" className={classes.img} />
                </div>
                <div></div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <MuiLink href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </MuiLink>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
