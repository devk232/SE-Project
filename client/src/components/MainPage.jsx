import React, {Fragment} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from './Navbar';
import {Link, NavLink} from 'react-router-dom';






const MainPage = () => {
  return (
    <div>
      <Fragment>
      <div className="row">
		<div className="center">
			<img src="https://cpb-us-w2.wpmucdn.com/sites.udel.edu/dist/b/344/files/2020/04/video-conferencing-illustration.jpg" alt="img"></img>
			<h2 className="main">Best in class experience for you here.</h2>
			<div className="qw">
				<h2 >Precisely engineered service to provide everyone the features of audio visual meeting along with one to one messaging facility.
					Keeping you securely connected wherever you are.
				</h2>
			</div>

		</div>
		<div className="center">
			<h1>Now no one is far. Connecting  all.</h1>
			<button>Join Meeting</button>
			<button>Host Meeting</button>
		</div>
	</div>
    </Fragment>
    </div>
  )
};

export default MainPage;
