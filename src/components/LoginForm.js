import { Button } from '@mui/material';
import React, {useState, useContext} from 'react';
import LoginLogo from './../assets/login_logo.png';
import DividerWithText from './DividerWithText';
import { TextField } from '@material-ui/core';
import './../css/LoginForm.css';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import {auth, googleProvider} from './Firebase';
import { useNavigate } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure()

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    if (localStorage.getItem('isLoggedIn') === 'true'){
        navigate("/", { replace: true });
    }

    const googleSignOut = () => {
        signOut(auth).then(() => {
            toast.success('User successfully logged out', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          }).catch((error) => {
            toast.error('An error occured! Please try again.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          });
    }

    const googleSignIn = () => {
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
        console.log("LOGIN SUCCESSFUL");
        if (user.email.split('@')[1] === 'lnmiit.ac.in'){
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userName", user.displayName);
            localStorage.setItem("photoURL", user.photoURL);
            navigate("/", { replace: true });
        }else{
            toast.error('Login failed', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("LOGIN FAILED");
        toast.error('Login failed', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        // ...
      });
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const emailSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("LOGIN SUCCESSFUL");
            localStorage.setItem("isLoggedIn", true);
            navigate("/", { replace: true });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('LOGIN FAILED');
            toast.error('Login failed', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        });
    }

  return (
    <>
    <ToastContainer />
      <div class="main">
          <img id="logoImage" src={LoginLogo} alt="log" width="96px" height="148px"/>
          <button className="button-google" onClick={googleSignIn}>Google</button>
              <DividerWithText>Or</DividerWithText>
         
          <div className="container">
              
              <div className="inputs">
              <TextField id="outlined-basic login" label="College Email" className="inp" variant="outlined" type="email" onChange={handleEmailChange} value={email}/>
              <TextField id="outlined-basic login" label="Password" className="inp-password" variant="outlined" type="password" onChange={handlePasswordChange} value={password}/>
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

              <button style={{ border:"1px solid #41337A"}} onClick={emailSignIn}>Log In</button>

              <div className="bottom-div"><span className='newAccount'> Don't have an account yet?</span><a className="createAcc">Create Account</a></div>
          </div>
    </div>
    </>
  )
}

export default LoginForm