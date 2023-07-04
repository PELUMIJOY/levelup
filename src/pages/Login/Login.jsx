/* eslint-disable react/no-unescaped-entities */

import { Link, useNavigate } from "react-router-dom";
import sign from "../sign-up/signup.module.css";
import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import {signInWithGoogle} from '../../service/firebase'
// import firebase from '../../service/firebase'
// import Studentdashboard from "../Studentdashboard";
// import GoogleLogin from "../../components/GoogleLogin";




const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});

const Login = () => {
  const Navigate =useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

 const  onSubmitHandler=()=>{
  // console.log({ data });
  reset();
    axios.post("https://charitable-ngo.onrender.com/auth/login",{
      email:email,
      password:password
    }).then((res) =>{
      console.log(res)
      toast.success("You have sucessfully logged in")
      setTimeout(() => {
       Navigate("/dashboard");
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

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     setUser(user);
  //   })
  // }, [])

  // console.log(user);

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
            <Link to="/signup" className={sign.btn}>
              Sign Up
            </Link>
          </div>
        </div>
        <div className={sign.right}>
          <h2 className={sign.rightTop}>Login</h2>

          <form action="" onSubmit={handleSubmit(onSubmitHandler)} className={sign.middle}>
            <input {...register("email")}
              type="email"
              value={email}
              placeholder="Phone or Email"
              className={sign.input}
              required
              onChange={(e) =>setEmail(e.target.value)}
            />
            <label htmlFor="">{errors.email?.message}</label>
            <br />

            <input {...register("password")}
              type="password"
              value={password}
              placeholder="Password"
              className={sign.input}
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <label htmlFor="">{errors.password?.message}</label>
            <br />

            <button type="submit" className={sign.inputbtn}>
              Log In
            </button>
            <p className={sign.inputpara}>
              {" "}
              Don't have an account?{" "}
              <Link className={sign.inputlink} to="/signup">
                Sign up
              </Link>
            </p>
          </form>
          <div className={sign.break}>
            <hr /> <p>OR</p> <hr />
          </div>

          <div className={sign.bottom}>   
            <button className={sign.bottom1} onClick={signInWithGoogle} 
            >Log In with Google</button>
            
            {/* <GoogleLogin/> */}
            {/* <button className={sign.bottom1}>Log In with Facebook</button> */}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Login;
