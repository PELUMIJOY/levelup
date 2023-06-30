import { Link, redirect } from "react-router-dom";
import sign from "./signup.module.css";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://charitable-ngo.onrender.com/auth/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        toast.success('You have succesfully signup proceed to login')
        toast.success(res.data.message);
        setTimeout(() => {
          window.location.href = "/log";
        }, 2000);
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          const errorMessage = error.response.data.message;
          toast.error(errorMessage);
        } else {
          toast.error('An error occurred. Please try again.');
        }
        // console.log(error);
      });
  };
  return (
    <div className={sign.container}>
      <div className={sign.wrapper}>
        <div className={sign.left}>
          <h3 className={sign.left1}>
            Charit<span className={sign.leftspan}>Able</span>
          </h3>
          <div className={sign.content}>
            <h2 className={sign.center}>Welcome!</h2>
            <p className={sign.center1}>
              To connect with us, Please Sign Up with your personal information.
            </p>
            <Link to="/log" className={sign.btn}>
              Login
            </Link>
          </div>
        </div>
        <div className={sign.right}>
          <h2 className={sign.rightTop}>signup</h2>
          <div className={sign.radioContainer}>
            <div className={sign.radio}>
              <input type="radio" />
              <label className={sign.student} htmlFor="student">
                Student
              </label>
            </div>
            <div className={sign.radio}>
              <input type="radio" />
              <label className={sign.student} htmlFor="instructor">
                Instructor
              </label>
            </div>
          </div>

          <form action="" onSubmit={handleSubmit} className={sign.middle}>
        
            <input
              type="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              className={sign.input}
              required
              id="name"
            />
          
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Phone or Email"
              className={sign.input}
              required
              id="email"
            />


          
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className={sign.input}
              required
              id="password"
            />

            {/* <input type="submit" value={signUp}/> */}
            <button type="submit" onClick={handleSubmit} className={sign.inputbtn}>
                Sign Up
            </button>
            <p className={sign.inputpara}>
              Already have account?{" "}
              <Link className={sign.inputlink} to="/log">
                Log In
              </Link>
            </p>
          </form>
          <div className={sign.break}>
            <hr /> <p>OR</p> <hr />
          </div>

          <div className={sign.bottom}>
            <button className={sign.bottom1}>Sign Up with Google</button>
            <button className={sign.bottom1}>Sign Up with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
