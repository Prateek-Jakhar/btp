import { Button } from '@mui/material';
import React from 'react';
import LoginLogo from './../assets/login_logo.png';
import DividerWithText from './DividerWithText';
import { TextField } from '@material-ui/core';
import './../css/LoginForm.css'

const LoginForm = () => {
  return (
      <div class="main">
          <img id="logoImage" src={LoginLogo} alt="log" width="96px" height="148px"/>
          <button className="button-google">Google</button>
              <DividerWithText>Or</DividerWithText>
         
          <div className="container">
              
              <div className="inputs">
              <TextField id="outlined-basic login" label="College Email" className="inp" variant="outlined" type="email" />
              <TextField id="outlined-basic login" label="Password" className="inp-password" variant="outlined" type="password" />
              </div>
              <div className="check">
                  <div>
                      <input type="checkbox" />
                      <span style={{marginLeft:"5px"}}>
                          Remember me
                      </span>
                  </div>
                  <span id="spanForgotPassword">Forgot Password?</span>
              </div>

              <button style={{ border:"1px solid #41337A"}}>Log In</button>

              <span className='newAccount'> Don't have an account yet?</span><span className="createAcc">Create Account</span>
          </div>
    </div>
  )
}

export default LoginForm