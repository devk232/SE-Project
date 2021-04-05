import * as React from "react";
import { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "./common/input";
import {
  Avatar,
  Button,
  CssBaseline,
  Checkbox,
  Link,
  Paper,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import Form from "./common/form";

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(to be addeed)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "ldight"
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

class Register extends Form {
  state = {
    data: { name: "", email: "", password: "", password2: "" },
    showPassword: false,
  };
  handleShowPassword = () => {
    let { showPassword } = this.state;
    showPassword = !showPassword;
    this.setState({ showPassword: showPassword });
    console.log("fsda", showPassword);
  };
  render() {
    const { data, showPassword } = this.state;
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form className={classes.form} noValidate>
              <Input
                name="name"
                label="Name"
                value={data.name}
                handleChange={this.handleChange}
              />
              <Input
                name="email"
                label="Email Address"
                value={data.email}
                handleChange={this.handleChange}
              />
              <Input
                name="password"
                label="Password"
                value={data.password}
                handleChange={this.handleChange}
                handleShowPassword={this.handleShowPassword}
                type="password"
              />
              <Input
                name="password2"
                label="Confirm Password"
                value={data.password2}
                handleChange={this.handleChange}
                type="password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Register);
