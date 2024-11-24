import React ,{ useState }from 'react'
import pic from './desk.gif'
import { Backdrop, Button, CircularProgress, TextField } from '@mui/material';
import './Mycss.css';
import Toaster from "./Toaster";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";



function Login() {

  const server = process.env.REACT_APP_BACKEND;
  console.log("server: "+server);

  const [showlogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");

  const navigate = useNavigate();
  
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }


  

  const loginHandler = async () =>  {
    setLoading(true);
    console.log("hi" + (process.env.REACT_APP_BACKEND));
    try {
      
      //config 
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log(data);
      //response
      const response = await axios.post(
        `${server}/user/login/`,
        data,
        config
      );

      //handling sign-in
      console.log("Login: ",response);
      setLogInStatus({  msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app");
    } catch (error) {
      
      console.log(error.reponse);
      setLogInStatus({
        msg: "Invalid UserName or Pawword",
        key: Math.random(),
      });
      setLoading(false);
    }

  };


  const signUpHandler = async () =>  {
    setLoading(true);
    try {
      
      //config 
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log(data);
      //response
      const response = await axios.post(
        `${server}/user/register/`,
        data,
        config
      );

      //handling sign-up
      console.log(response);
      setSignInStatus({  msg: "Success", key: Math.random() });
      navigate("/app");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      
      console.log(error.reponse);
        
        if (error.response.status === 405) {
          setSignInStatus({
            msg: "User with this email ID already Exists",
            key: Math.random(),
          });
        }

        if (error.response.status === 406) {
          setSignInStatus({
            msg: "User Name already Taken, Please take another one",
            key: Math.random(),
          });
        }
        setLoading(false);
    }

  };
  
  
  return (
    <>
    <Backdrop 
      sx = {{color : "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open = {loading}
    >
      <CircularProgress color = "secondary" />
    </Backdrop>



    <div className='login-container' style={{
      fontFamily: "Inter"
    }}>
        <div className='image-container'>
            <img  style = {{
              borderRadius:"100px",
            }}src = {pic} alt='Logo' className='welcome-logo' />
        </div>



          {showlogin && (
            <div className='login-box'>
              <p className="login-text" >Login to your account</p>
              
              
              {/* ///////////////////////////////////////// 🧑🏼‍🦲 USERNAME //////////////////////////  */}
              
              <TextField 
                onChange = {changeHandler}
                id="outlined-basic" 
                label="Enter user name" 
                variant="outlined" 
                color = "secondary"
                name = "name"
                onKeyDown={(event) => {
                  if (event.code === "Enter") {
                    loginHandler();
                  }
                }}
              />


              {/* ///////////////////////////////////////// 🔐 PASSWORD UP //////////////////////////  */}
              
              
              <TextField 
                onChange = {changeHandler}
                id="outlined-password-input" 
                label ='Password' 
                type='password' 
                autoComplete='current-password'
                color = "secondary"
                name = "password"
                onKeyDown={(event) => {
                  if (event.code === "Enter") {
                    loginHandler(); 
                  }
                }}
              />

              {/* /////////////////////////////////////////  LOGIN BUTTON //////////////////////////  */}

              <Button 
                variant="outlined"
                color="secondary"
                onClick={loginHandler}
                isLoading
              >
                Login
              </Button>



              <p>
                Don't have an account ?{" "}
                <span
                  className = "hyper"
                  onClick = {() => {
                    setShowLogin(false);
                  }}
                >
                  Sign Up
                </span>                
              </p>
              {logInStatus ? (
                <Toaster key = {logInStatus.key} message ={logInStatus.msg}/>
              ) : null}




            </div>
          )}



          {!showlogin && (
            <div className="login-box">
              <p className="login-text">Create your Account</p>
              
              {/* ///////////////////////////////////////// 🧑🏼‍🦲 USERNAME //////////////////////////  */}
              
              <TextField
                onChange={changeHandler}
                id="standard-basic"
                label="Enter User Name"
                variant="outlined"
                color="secondary"
                name="name"
                helperText=""
                onKeyDown={(event) => {
                  if (event.code === "Enter") {
                    // console.log(event);
                    signUpHandler();
                  }
                }}
              />

                {/* ///////////////////////////////////////// 📧 EMAIL //////////////////////////  */}
              
              <TextField
                onChange={changeHandler}
                id="standard-basic"
                label="Enter Email Address"
                variant="outlined"
                color="secondary"
                name="email"
                onKeyDown={(event) => {
                  if (event.code === "Enter") {
                    // console.log(event);
                    signUpHandler();
                  }
                }}
              />

                {/* ///////////////////////////////////////// 🔐 PASSWORD //////////////////////////  */}

              <TextField
                onChange={changeHandler}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                color="secondary"
                name="password"
                onKeyDown={(event) => {
                  if (event.code === "Enter") {
                    // console.log(event);
                    signUpHandler();
                  }
                }}
              />

                {/* ///////////////////////////////////////// 🏃‍♂️‍➡️ SINUP //////////////////////////  */}

              <Button
                variant="outlined"
                color="secondary"
                onClick={signUpHandler}
              >
                Sign Up
              </Button>
              <p>
                Already have an Account ? {" "}
                <span
                  className="hyper"
                  onClick={() => {
                    setShowLogin(true);
                  }}
                >
                  Log in
                </span>
              </p>
              {signInStatus ? (
                <Toaster key={signInStatus.key} message={signInStatus.msg} />
              ) : null}
            </div>
          )}




    </div>
    </>





  )
}

export default Login