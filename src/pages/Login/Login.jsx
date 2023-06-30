/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import sign from "../sign-up/signup.module.css";
import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 const handleSumbit=(e)=>{
    e.preventDefault()
    axios.post("https://charitable-ngo.onrender.com/auth/login",{
      email:email,
      password:password
    }).then((res) =>{
      console.log(res)
      toast.success("You have sucessfully logged in")
      setTimeout(() => {
        window.location.href = "https://levelup-git-main-pelumijoy.vercel.app/log";
      }, 2000)
    
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response && response.status === 400) {
          const { data } = response;
          if (data.error === 'Invalid credentials') {
            toast.error('Invalid email or password');
            return; // Stop further execution
          }
        }
      } else {
        toast.error('An error occurred. Please try again.');
      }
    });

  }
  return (
    <div className={sign.container}>
      <div className={sign.wrapper}>
        <div className={sign.left}>
          <h3 className={sign.left1}>
            Charit<span className={sign.leftspan}>Able</span>
          </h3>
          <div className={sign.content}>
            <h2 className={sign.center}>Welcome Back!</h2>
            <p className={sign.center1}>
              To connect with us, Please Log In with your personal information.
            </p>
            <Link to="https://levelup-git-main-pelumijoy.vercel.app/signup" className={sign.btn}>
              Sign Up
            </Link>
          </div>
        </div>
        <div className={sign.right}>
          <h2 className={sign.rightTop}>Login</h2>

          <form action="" onSubmit={handleSumbit} className={sign.middle}>
            <input
              type="email"
              value={email}
              placeholder="Phone or Email"
              className={sign.input}
              required
              onChange={(e) =>setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className={sign.input}
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            {/* <input type="submit" value={signUp}/> */}
            <button type="submit" className={sign.inputbtn}>
              Log In
            </button>
            <p className={sign.inputpara}>
              {" "}
              Don't have an account?{" "}
              <Link className={sign.inputlink} to="https://levelup-git-main-pelumijoy.vercel.app/signup">
                Sign up
              </Link>
            </p>
          </form>
          <div className={sign.break}>
            <hr /> <p>OR</p> <hr />
          </div>

          <div className={sign.bottom}>
            <button className={sign.bottom1}>Log In with Google</button>
            <button className={sign.bottom1}>Log In with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
