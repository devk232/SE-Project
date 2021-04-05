import React from "react";
import { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
} from "@material-ui/core";
import Form from "./common/form";

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(to be added)",
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

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    showPassword: false,
  };
  handleShowPassword = () => {
    let { showPassword } = this.state;
    showPassword = !showPassword;
    this.setState({ showPassword: showPassword });
    console.log("fsda", showPassword);
  };
  doSubmit = () => {
    console.log("fads");
  };
  render() {
    const { classes } = this.props;
    const { data, showPassword } = this.state;
    console.log(showPassword);
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={this.handleSubmit}
            >
              <Input
                name="email"
                label="Email Address"
                handleChange={this.handleChange}
                value={data.email}
              />
              <Input
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                handleChange={this.handleChange}
                handleShowPassword={this.handleShowPassword}
                value={data.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.submit}
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="register" variant="body2">
                    {"Don't have an account? Sign Up"}
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

export default withStyles(styles, { withTheme: true })(Login);
