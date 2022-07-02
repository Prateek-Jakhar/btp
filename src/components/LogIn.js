import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/LogIn.css";
import Grid from '@mui/material/Grid';
import sideImage from './../assets/login_image.png';
import { LoginForm } from './LoginForm.js';

const LogIn = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          {LoginForm}
        </Grid>
        <Grid
          item
          xs={9}>
            <img src={sideImage} />
        </Grid>

      </Grid>
    </div>
  );
};

export default LogIn;
