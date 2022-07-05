import { Button } from '@mui/material';
import React from 'react';
import LoginLogo from './../assets/login_logo.png';
import DividerWithText from './DividerWithText'
import './../css/LoginForm.css'

const LoginForm = () => {
  return (
      <div class="main">
          <img id="logoImage" src={LoginLogo} alt="log" width="96px" height="148px"/>
              <button className="button-google">Google</button>
          <DividerWithText className="divider">Or</DividerWithText>
          <div className="container">
              
              <label htmlFor="login" style={{textAlign:"left", marginTop:"30px"}}>Email Address</label>
              <input id="login" className="login" type="text" />

              <label htmlFor='password' style={{marginTop:"20px"}}>Password</label>
              <input id='password' className="login" type="Password" />

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